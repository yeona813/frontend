import { instance } from 'api/instance';
import Button from 'components/common/Button';
import Question from 'components/home/Question';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const isLoggedIn = localStorage.getItem('accessToken');

  const [text, setText] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, []);

  const handleTextChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  const handleClick = async () => {
    const headers = {
      Authorization: `token ${localStorage.getItem('accessToken')}`,
    };

    if (text !== '') {
      try {
        const response = await instance.post(
          'quote/recommend/',
          {
            query: text,
          },
          { headers },
        );
        if (response.status === 200) {
          navigate(`/resultQuote/${response.data.quote_id}`);
        }
      } catch (error) {
        alert(error);
      }
    } else {
      alert('내용을 입력해주세요');
    }
  };

  return (
    <div className="flex flex-col items-center p-[40px] gap-[30px]">
      <Question text={text} handleTextChange={handleTextChange} />
      <Button text="결과 보기" handleClick={handleClick} />
    </div>
  );
};

export default HomePage;
