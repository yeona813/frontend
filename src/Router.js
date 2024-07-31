import LoginPage from 'pages/login/LoginPage';
import MyPage from 'pages/my/MyPage';
import RegisterPage from 'pages/register/RegisterPage';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from 'pages/home/HomePage';
import QuoteListPage from 'pages/quoteList/QuoteListPage';
import ResultQuotePage from 'pages/resultQuote/ResultQuotePage';
import Redirection from 'pages/login/Redirection';

function Router() {
  return (
    <div className="mt-16">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/resultQuote" element={<ResultQuotePage />} />
        <Route path="/quoteList" element={<QuoteListPage />} />
        <Route exact path="/oauth" element={<Redirection />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/my" element={<MyPage />} />
      </Routes>
    </div>
  );
}
// cf) Redirection 페이지는 카카오 로그인 성공이 이동하는 페이지 입니다.
export default Router;
