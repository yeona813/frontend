import { instance } from 'api/instance';
import React, { useRef } from 'react';
import { user } from 'types/userList';

interface UserItemProps {
  element: user;
  showUserProfile(targetEmail: string): void;
}

const UserItem = ({ element, showUserProfile }: UserItemProps) => {
  const followRef = useRef<HTMLButtonElement>(null);

  const onClickFollow = async () => {
    const headers = {
      Authorization: `token ${localStorage.getItem('accessToken')}`,
    };

    try {
      const response = await instance.post(`accounts/follow/${element.id}/`, {
        headers,
      });
      if (response.status === 200) {
        console.log('팔로우 하거나 끊거나하~~');
      }
    } catch (error) {
      console.log(error);
    }
    if (followRef.current) {
      followRef.current.style.backgroundColor = 'blue';
      followRef.current.style.textDecorationColor = 'white';
      followRef.current.style.border = 'none';
    }
  };

  return (
    <div
      className="shadow-custom-bottom-right border rounded-lg border-none border-black p-1 flex bg-white items-center"
      tabIndex={0}
      role="button"
      onClick={() => showUserProfile(element.email)}
      onKeyDown={() => showUserProfile(element.email)}
    >
      <div className="p-3 ">
        <img
          src={`${element.profile_image}`}
          alt="유저이미지"
          className="rounded-full h-11 w-11"
        />
      </div>
      <div className="flex-1 p-3">
        <div>{element.nickname}</div>
        <div className="flex gap-7">
          <div className="flex gap-2">
            <img src="/icons/heart-solid.svg" alt="하트" />
            <span>{element.like_quotes.length}</span>
          </div>
          <div className="flex gap-2">
            <span className="font-extrabold">+</span>
            <span>{element.registered_quotes.length}</span>
          </div>
        </div>
      </div>
      <div className="p-3">
        <button
          ref={followRef}
          type="button"
          className="border-black border p-2 text-sm rounded-md hover:bg-black hover:text-white"
          onClick={onClickFollow}
        >
          팔로우
        </button>
      </div>
    </div>
  );
};

export default UserItem;
