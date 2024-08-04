import QuoteList from 'components/quoteList/QuoteList';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const QuoteListPage = () => {
  const isLoggedIn = localStorage.getItem('accessToken');
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, []);

  return <QuoteList />;
};

export default QuoteListPage;
