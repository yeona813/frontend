import { instance } from 'api/instance';
import UserProfilePortal from 'helpers/UserProfilePortal';
import React, { useEffect, useRef, useState } from 'react';
import { smallUser, user, listUser } from 'types/userList';
import UserProfile from './UserProfile';

interface UserItemProps {
  element: listUser;
  smallUser: smallUser[];
  currentuser?: user;
  showingUser?: listUser;
  showUserProfile(targetEmail: string): void;
}

const UserItem = ({
  element,
  smallUser,
  currentuser,
  showingUser,
  showUserProfile,
}: UserItemProps) => {
  const followRef = useRef<HTMLButtonElement>(null);
  const [user] = smallUser.filter((value) => value.email === element.email);
  const [followed, setFollowed] = useState(false);
  const [show, setShow] = useState(false);

  const onClickFollow = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    const headers = {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    };

    console.log(user.id);

    try {
      const response = await instance.post(
        `accounts/follow/${user.id}/`,
        {},
        { headers },
      );
      if (response.status === 200) {
        console.log('팔로우 하거나 끊거나하~~');
      }
    } catch (error) {
      console.log(error);
    }

    if (followRef.current) {
      if (followed) {
        followRef.current.style.backgroundColor = 'white';
        followRef.current.style.color = 'black';
        followRef.current.style.border = '1px solid black';
      } else {
        followRef.current.style.backgroundColor = 'blue';
        followRef.current.style.color = 'white';
        followRef.current.style.border = 'none';
      }
      setFollowed(!followed);
    }
  };

  useEffect(() => {
    // 팔로우 초기 상태
    if (currentuser?.followings.some((element) => element.id === user.id)) {
      if (followRef.current) {
        followRef.current.style.backgroundColor = 'blue';
        followRef.current.style.color = 'white';
        followRef.current.style.border = 'none';
        setFollowed(true);
      }
    }
  }, [currentuser, user.id]);

  const onClickShow = () => {
    showUserProfile(element.email);
    setShow(!show);
  };

  return (
    <div
      className="shadow-custom-bottom-right border rounded-lg border-none border-black p-1 flex bg-white items-center"
      tabIndex={0}
      role="button"
      onClick={onClickShow}
      onKeyDown={onClickShow}
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
          {followed ? '팔로잉' : '팔로우'}
        </button>
      </div>
      {show && showingUser && (
        <UserProfilePortal>
          <UserProfile
            showingUser={showingUser}
            smallUser={smallUser}
            currentuser={currentuser}
            followed={followed}
            setFollowed={setFollowed}
          />
          <div className="absolute top-0 left-0 h-screen flex w-full">
            <div
              tabIndex={0}
              role="button"
              className="flex bg-black opacity-50 fixed top-0 w-screen h-screen z-40"
              onClick={onClickShow}
              onKeyDown={onClickShow}
            ></div>
          </div>
        </UserProfilePortal>
      )}
    </div>
  );
};

export default UserItem;
