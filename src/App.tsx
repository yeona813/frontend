import RegisterPage from 'pages/register/RegisterPage';
import React from 'react';
import Router from 'Router';

function App() {
  return (
    <div className="w-[376px] h-screen mx-auto bg-white">
      <Router />
      <RegisterPage />
    </div>
  );
}

export default App;
