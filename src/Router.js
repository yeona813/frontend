import Header from 'components/common/Header';
import LoginPage from 'pages/login/LoginPage';
import MyPage from 'pages/my/MyPage';
import QuotePage from 'pages/quote/QuotePage';
import RegisterPage from 'pages/register/RegisterPage';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/quote" element={<QuotePage />} />
        <Route path="/my" element={<MyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
