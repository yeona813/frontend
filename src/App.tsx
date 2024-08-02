import Footer from 'components/common/Footer';
import Header from 'components/common/Header';
import React from 'react';
import { useLocation } from 'react-router-dom';
import Router from 'Router';

function App() {
  const location = useLocation();

  return (
    <div className="relative h-[812px] mx-auto bg-yellow-FF overflow-auto scrollbar-hide">
      <Header />
      <Router />
      {location.pathname !== '/login' && location.pathname !== '/register' && (
        <Footer />
      )}
    </div>
  );
}

export default App;
