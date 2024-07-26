import Header from 'components/common/Header';
import LoginPage from 'pages/login/LoginPage';
import MyPage from 'pages/my/MyPage';
import QuotePage from 'pages/quote/QuotePage';
import RegisterPage from 'pages/register/RegisterPage';
import Redirection from 'pages/login/Redirection';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

function Router() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/oauth" element={<Redirection />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/quote" element={<QuotePage />} />
        <Route path="/my" element={<MyPage />} />
      </Routes>
    </div>
  );
}
// cf) Redirection 페이지는 카카오 로그인 성공이 이동하는 페이지 입니다.
export default Router;
