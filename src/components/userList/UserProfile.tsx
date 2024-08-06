import { instance } from 'api/instance';
import React, { useEffect, useRef, useState } from 'react';
import { realQuote, listUser, smallUser, user } from 'types/userList';

interface UserProfileProps {
  showingUser: listUser;
  smallUser: smallUser[];
  currentuser?: user;
  followed: boolean;
  setFollowed: React.Dispatch<React.SetStateAction<boolean>>;
}

const UserProfile = ({
  showingUser,
  smallUser,
  currentuser,
  followed,
  setFollowed,
}: UserProfileProps) => {
  const [activeTab, setActiveTab] = useState('Liked');
  const [likedQuotes, setLikedQuotes] = useState<realQuote[]>([]);

  const followRef = useRef<HTMLButtonElement>(null);
  const [user] = smallUser.filter(
    (value) => value.email === currentuser!.email,
  );

  const getLikedQuotes = async () => {
    const likedQuotesData = await Promise.all(
      showingUser.like_quotes.map(async (element) => {
        try {
          const response = await instance.get(`quote/${element}/`);
          if (response.status === 200) {
            return response.data;
          }
          return undefined;
        } catch (error) {
          console.error('데이터를 불러오는 데 실패했습니다', error);
          return undefined;
        }
      }),
    );
    setLikedQuotes(likedQuotesData.filter(Boolean));
  };

  const onClickFollow = async () => {
    if (followRef.current) {
      const headers = {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      };

      try {
        const response = await instance.post(
          `accounts/follow/${user.id}/`,
          {},
          { headers },
        );
        if (response.status === 200) {
          console.log('follow access');
        }
      } catch (error) {
        console.log(error);
      }
    }
    setFollowed(!followed);
  };

  const handleProfileClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // 이벤트 전파를 막습니다
  };

  const handleProfileKeyDown = (e: React.KeyboardEvent) => {
    e.stopPropagation(); // 이벤트 전파를 막습니다
  };

  useEffect(() => {
    getLikedQuotes();
  }, []);

  return (
    <div className="flex items-center justify-center">
      <div
        onClick={handleProfileClick}
        tabIndex={0}
        role="button"
        onKeyDown={handleProfileKeyDown}
        className="bg-white flex flex-col items-center w-[300px] fixed top-20 z-50 h-[500px] rounded-lg overflow-hidden"
      >
        <div className="container mx-auto w-[300px] bg-white p-6 rounded-lg shadow-lg h-full flex flex-col">
          <div className="flex flex-col items-center text-center gap-2">
            <img
              className="w-16 h-16 rounded-full"
              src={`${showingUser.profile_image}`}
              alt="프로필 사진"
            />
            <p>{showingUser.nickname}</p>
            <div className="flex gap-3">
              <span>팔로잉 : {showingUser.following_count}</span>
              <span>팔로워 : {showingUser.follower_count}</span>
            </div>
            <button
              className={` ${!followed ? 'border border-black p-2 rounded-lg' : 'bg-blue-400 border-none p-2 rounded-lg text-white'}  mt-4 text-sm hover:text-white hover:bg-black z-60`}
              type="button"
              onClick={onClickFollow}
            >
              {followed ? '팔로잉' : '팔로우'}
            </button>
          </div>
          <div className="mt-4 flex-grow overflow-y-auto">
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
            <div className="p-3 flex-grow overflow-y-auto">
              {activeTab === 'Liked' ? (
                <ul className="flex flex-col justify-center h-full">
                  {likedQuotes.map((element) => (
                    <li
                      key={element.id}
                      className="h-[50px] flex items-center border-slate-400 border-b-[1px]"
                    >
                      <div className="">{element.content}</div>
                    </li>
                  ))}
                </ul>
              ) : (
                <ul className="flex flex-col justify-center h-full">
                  {showingUser.registered_quotes.map((element) => (
                    <li
                      key={element.id}
                      className="h-auto flex items-center border-slate-400 border-b-[1px] py-1"
                    >
                      <div className="">{element.content}</div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
