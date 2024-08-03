import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Tab } from '@headlessui/react';
import { useNavigate } from 'react-router-dom';

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

const MyPage = () => {
  const [user, setUser] = useState<User>({
    username: '',
    avatar: '',
    followers: 0,
    following: 0,
  });

  const [likedQuotes, setLikedQuotes] = useState<Quote[]>([]);
  const [addedQuotes, setAddedQuotes] = useState<Quote[]>([]);
  const navigate = useNavigate();

  const fetchProfileData = async () => {
    try {
      const userInfo = await axios.get('/api/user/info');
      setUser(userInfo.data);
      const liked = await axios.get('/api/quotes/liked');
      setLikedQuotes(liked.data);
      const added = await axios.get('/api/quotes/added');
      setAddedQuotes(added.data);
    } catch (error) {
      console.error('데이터를 불러오는 데 실패했습니다', error);
    }
  };

  useEffect(() => {
    fetchProfileData();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <div className="container mx-auto bg-white p-6 rounded-lg shadow-lg">
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
          >
            프로필 수정
          </button>
        </div>
        <div className="mt-6 flex-grow">
          <Tab.Group>
            <Tab.List className="flex border-b">
              {['Liked', 'Added'].map((tabName) => (
                <Tab
                  key={tabName}
                  className={`flex-1 p-2 text-center font-medium text-sm ${tabName === 'Liked' ? 'text-red-500' : 'text-blue-500'}`}
                >
                  {({ selected }) => (
                    <button
                      type="button"
                      className={`${selected ? 'text-black border-b-2 border-black' : 'hover:text-gray-600'}`}
                    >
                      {tabName}
                    </button>
                  )}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels>
              <Tab.Panel className="p-3">
                {likedQuotes.map((quote) => (
                  <div
                    key={quote.id}
                    className="flex items-center border-b py-2"
                  >
                    <span className="mr-2 text-red-500">❤️</span>
                    <p>{quote.text}</p>
                  </div>
                ))}
              </Tab.Panel>
              <Tab.Panel className="p-3">
                <button
                  className="bg-yellow-500 text-white py-2 px-4 rounded-lg mb-4"
                  type="button"
                  onClick={() => navigate('/writequote')}
                >
                  + 명언 등록하기
                </button>
                {addedQuotes.map((quote) => (
                  <div
                    key={quote.id}
                    className="flex items-center border-b py-2"
                  >
                    <p>{quote.text}</p>
                  </div>
                ))}
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
