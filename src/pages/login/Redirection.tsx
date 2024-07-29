import axios from 'axios';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Redirection = () => {
  // const code = window.location.search;
  // 결과 => code?=#$%@#%#$%@#$%...
  const code = new URL(document.location.toString()).searchParams.get('code');
  // 결과 => #$%@#%#$%@#$%...

  const navigate = useNavigate();

  useEffect(() => {
    // 백엔드한테 코드 주기
    axios
      .post('#', {
        code,
      })
      .then((response) => {
        // Handle success.
        // console.log('Well done!');
        // console.log('User profile', response.data.user);
        console.log('User token', response.data.jwt);
        localStorage.setItem('data', response.data.jwt);
        navigate('/');
      })
      .catch((error) => {
        // Handle error.
        console.log('An error occurred:', error.response);
      });
  });
  return <div>리다이렉션 페이지</div>;
};

export default Redirection;
