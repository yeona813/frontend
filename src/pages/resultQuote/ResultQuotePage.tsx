import { instance } from 'api/instance';
import Button from 'components/common/Button';
import { QuoteImage } from 'components/common/constants/QuoteImage';
import Comment from 'components/resultQuote/Comment';
import ResultQuote from 'components/resultQuote/ResultQuote';
import WriteComment from 'components/resultQuote/WriteComment';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

interface CommentType {
  id: number;
  quote: number;
  content: string;
  created_at: string;
  user: string;
}

const ResultQuotePage = () => {
  const [isLike, setIsLike] = useState(false);
  const [quoteData, setQuoteData] = useState({
    author: '',
    content: '',
    description: '',
    image: '',
  });
  const [commentData, setCommentData] = useState([]);
  const [comment, setComment] = useState('');
  const [imageURL, setImageURL] = useState('');
  const isLoggedIn = localStorage.getItem('accessToken');
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      if (!isLoggedIn) {
        navigate('/login');
      } else {
        try {
          const quoteResponse = await instance.get(`quote/${id}/`);
          setQuoteData({
            author: quoteResponse.data.author,
            content: quoteResponse.data.content,
            description: quoteResponse.data.description,
            image: quoteResponse.data.image,
          });
          setImageURL(
            quoteResponse.data.image ||
              QuoteImage[Math.floor(Math.random() * QuoteImage.length)],
          );
        } catch (error) {
          alert(error);
        }
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const commentResponse = await instance.get(`quote/${id}/comment/`);
        setCommentData(commentResponse.data);
      } catch (error) {
        alert(error);
      }
    };

    fetchData();
  }, [comment]);

  const handleClick = async () => {
    if (isLike) {
      try {
        const headers = {
          Authorization: `token ${localStorage.getItem('accessToken')}`,
        };

        const response = await instance.post(
          `quote/${id}/like/`,
          {},
          {
            headers,
          },
        );
        if (response.status === 200) {
          console.log('성공');
        }
      } catch (error) {
        alert(error);
      }
    }
    navigate('/quoteList');
  };

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(event.target.value);
  };

  const handleCommentClick = async () => {
    try {
      const headers = {
        Authorization: `token ${localStorage.getItem('accessToken')}`,
      };

      const response = await instance.post(
        `quote/${id}/comment/`,
        { content: comment },
        {
          headers,
        },
      );
      if (response.status === 200) {
        setComment('');
      }
    } catch (error) {
      alert(error);
    }
  };

  const handleLike = () => {
    setIsLike(!isLike);
  };

  return (
    <div className="flex flex-col items-center pt-[30px] gap-[30px]">
      <div className="flex flex-col gap-[20px] w-[300px] rounded-xl bg-white shadow-custom p-5">
        <ResultQuote
          imageUrl={imageURL}
          quote={quoteData.content}
          author={quoteData.author}
          isLike={isLike}
          description={quoteData.description}
          handleLike={handleLike}
        />
        <WriteComment
          comment={comment}
          handleChange={handleChange}
          handleCommentClick={handleCommentClick}
        />
        <div className="flex flex-col h-[140px] gap-[30px] overflow-scroll scrollbar-hide">
          {commentData.map((comment: CommentType) => (
            <Comment
              key={comment.id}
              profileImage="/images/quoteImage2.jpg"
              nickname={comment.user}
              date={new Date(comment.created_at).toLocaleDateString()}
              comment={comment.content}
            />
          ))}
        </div>
      </div>
      <Button text="명언 더 보기" handleClick={handleClick} />
    </div>
  );
};

export default ResultQuotePage;
