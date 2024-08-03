import axios from 'axios';
import Button from 'components/common/Button';
import Question from 'components/home/Question';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const isLoggedIn = true; // 로그인 여부 다시 가져와야함!

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
    if (text !== '') {
      try {
        const response = await axios.post('/quote/recommend', {
          query: text,
        });
        if (response.status === 200) {
          navigate('/resultQuote');
        }
      } catch (error) {
        alert(error);
      }
    } else {
      alert('내용을 입력해주세요');
    }
  };

  return (
    <div className="flex flex-col items-center pt-[30px] gap-[30px]">
      <Question text={text} handleTextChange={handleTextChange} />
      <Button text="결과 보기" handleClick={handleClick} />
    </div>
  );
};

export default HomePage;
