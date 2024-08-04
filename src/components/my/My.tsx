import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { instance } from 'api/instance';

interface Quote {
  id: number;
  text: string;
  author: string;
}

interface User {
  username: string;
  avatar: string;
  followers: number;
  following: number;
}

const My = () => {
  const [user, setUser] = useState<User>({
    username: '',
    avatar: '',
    followers: 0,
    following: 0,
  });

  const [likedQuotes, setLikedQuotes] = useState<Quote[]>([]);
  const [addedQuotes, setAddedQuotes] = useState<Quote[]>([]);
  const [activeTab, setActiveTab] = useState('Liked');
  const navigate = useNavigate();

  const fetchProfileData = async () => {
    try {
      const userInfoResponse = await instance.get('accounts/profile/', {
        headers: {
          Authorization: `token ${localStorage.getItem(`accessToken`)}`,
        },
      });
      if (userInfoResponse.status === 200) {
        setUser(userInfoResponse.data);
        console.log(userInfoResponse.data);
      }
    } catch (error) {
      console.error('데이터를 불러오는 데 실패했습니다', error);
    }
  };

  useEffect(() => {
    fetchProfileData();
  }, []);

  return (
    <div className="bg-yellow-FF min-h-screen p-[30px]">
      <div className="container mx-auto w-[300px] bg-white p-6 rounded-lg shadow-lg">
        <div className="flex flex-col items-center text-center">
          <img
            className="w-32 h-32 rounded-full"
            src={user.avatar}
            alt="프로필 사진"
          />
          <h1 className="text-2xl font-bold mt-2">{user.username}</h1>
          <p className="text-gray-600">
            팔로워 {user.followers} | 팔로잉 {user.following}
          </p>
          <button
            className="bg-yellow-500 text-white py-2 px-4 rounded-lg mt-4"
            type="button"
            onClick={() => navigate('/edit-profile')}
          >
            프로필 수정
          </button>
        </div>
        <div className="mt-6 flex-grow">
          <div className="flex border-b">
            {['Liked', 'Added'].map((tabName) => (
              <button
                key={tabName}
                className={`flex-1 py-2 text-center font-medium text-sm ${activeTab === tabName ? 'text-black border-b-2 border-black' : 'text-gray-600'}`}
                type="button"
                onClick={() => setActiveTab(tabName)}
              >
                {tabName}
              </button>
            ))}
          </div>
          <div className="p-3">
            {(activeTab === 'Liked' ? likedQuotes : addedQuotes).map(
              (quote) => (
                <div key={quote.id} className="flex items-center border-b py-2">
                  {activeTab === 'Liked' && (
                    <span className="mr-2 text-red-500">❤️</span>
                  )}
                  <p>{quote.text}</p>
                </div>
              ),
            )}
            {activeTab === 'Added' && (
              <button
                className="bg-yellow-500 text-white py-2 px-4 rounded-lg mb-4"
                type="button"
                onClick={() => navigate('/writeQuote')}
              >
                + 명언 등록하기
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default My;
