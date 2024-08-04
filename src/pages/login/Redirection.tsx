import axios from 'axios';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Redirection = () => {
  const code = new URL(window.location.href).searchParams.get('code');
  const navigate = useNavigate();
  console.log(code);

  useEffect(() => {
    if (code) {
      axios
        .post('http://192.168.35.62:8000/accounts/kakao/login/', code)
        .then((response) => {
          console.log('Response from backend:', response.data);
          localStorage.setItem('jwt', response.data.token);
          navigate('/'); // 로그인 후 메인 페이지로 리디렉션
        })
        .catch((error) => {
          console.log('An error occurred:', error);
        });
    }
  }, [code, navigate]);

  return <div>Redirecting...</div>;
};

export default Redirection;
