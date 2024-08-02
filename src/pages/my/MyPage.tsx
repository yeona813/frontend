import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MyPage = () => {
  const [user, setUser] = useState({ username: '', email: '' });
  const [quotes, setQuotes] = useState<
    { id: number; text: string; author: string }[]
  >([]);

  // 사용자 정보를 가져오는 함수
  const fetchUserInfo = async () => {
    try {
      const response = await axios.get('/api/user/info');
      setUser(response.data);
    } catch (error) {
      console.error('사용자 정보를 불러오는 데 실패했습니다', error);
    }
  };

  // 좋아하는 명언을 가져오는 함수
  const fetchLikedQuotes = async () => {
    try {
      const response = await axios.get('/api/quotes/liked');
      setQuotes(response.data);
    } catch (error) {
      console.error('명언을 불러오는 데 실패했습니다', error);
    }
  };

  useEffect(() => {
    fetchUserInfo();
    fetchLikedQuotes();
  }, []);

  return (
    <div className="bg-yellow-100 min-h-screen p-4">
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 text-center">
          내 페이지
        </h1>
        <div className="bg-white p-6 rounded-lg shadow-lg my-5">
          <h2 className="text-xl font-semibold">내 정보</h2>
          <p className="mt-2">사용자 이름: {user.username}</p>
          <p>이메일: {user.email}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold">좋아하는 명언</h2>
          {quotes.map((quote) => (
            <div key={quote.id} className="mt-4 p-4 border-t border-gray-200">
              <p className="quote text-lg">&ldquo;{quote.text}&rdquo;</p>
              <p className="author text-right">- {quote.author}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyPage;
