import LoginPage from 'pages/login/LoginPage';
import MyPage from 'pages/my/MyPage';
import RegisterPage from 'pages/register/RegisterPage';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from 'pages/home/HomePage';
import QuoteListPage from 'pages/quoteList/QuoteListPage';
import ResultQuotePage from 'pages/resultQuote/ResultQuotePage';
import Redirection from 'pages/login/Redirection';
import WriteQuotePage from 'pages/writeQuote/WriteQuotePage';
import EditProfile from 'components/my/EditProfile';
import DeleteAccount from 'components/my/DeleteAccount';

function Router() {
  return (
    <div className="mt-16">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/resultQuote/:id" element={<ResultQuotePage />} />
        <Route path="/writeQuote" element={<WriteQuotePage />} />
        <Route path="/quoteList" element={<QuoteListPage />} />
        <Route path="/auth/callback" element={<Redirection />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/my" element={<MyPage />} />
        <Route path="/edit" element={<EditProfile />} />
        <Route path="/deleteAccount" element={<DeleteAccount />} />
      </Routes>
    </div>
  );
}
// cf) Redirection 페이지는 카카오 로그인 성공이 이동하는 페이지 입니다.
export default Router;
