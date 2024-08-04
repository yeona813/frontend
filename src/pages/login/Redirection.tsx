import axios from 'axios';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Redirection = () => {
  const code = new URL(window.location.href).searchParams.get('code');
  const navigate = useNavigate();
  console.log(code);

  useEffect(() => {
    const kakaoLogin = async () => {
      await axios({
        method: 'get',
        url: `http://15.164.27.255/accounts/kakao/callback/?code=${code}`,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8', // json형태로 데이터를 보내겠다는뜻
        },
      }).then((res) => {
        // 백에서 완료후 우리사이트 전용 토큰 넘겨주는게 성공했다면
        console.log(res);
        // 계속 쓸 정보들( ex: 이름) 등은 localStorage에 저장해두자
        localStorage.setItem('accessToken', res.data.token);
        // 로그인이 성공하면 이동할 페이지
        navigate('/');
      });
    };
    kakaoLogin();
  }, [code, navigate]);

  return <div>Redirecting...</div>;
};

export default Redirection;
