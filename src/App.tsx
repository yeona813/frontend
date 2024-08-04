import Footer from 'components/common/Footer';
import Header from 'components/common/Header';
import React from 'react';
import { useLocation } from 'react-router-dom';
import Router from 'Router';

function App() {
  const location = useLocation();

  return (
    <div
      className="relative w-screen max-w-md h-screen mx-auto overflow-auto scrollbar-hide"
      style={{
        backgroundImage: `url('/images/background.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Header />
      <Router />
      {location.pathname !== '/login' && location.pathname !== '/register' && (
        <Footer />
      )}
    </div>
  );
}

export default App;
