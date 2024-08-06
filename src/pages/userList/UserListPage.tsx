import QuoteList from 'components/userList/UserList';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const UserListPage = () => {
  const isLoggedIn = localStorage.getItem('accessToken');
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, []);

  return <QuoteList />;
};

export default UserListPage;
