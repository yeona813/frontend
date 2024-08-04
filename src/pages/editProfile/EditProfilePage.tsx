import { instance } from 'api/instance';
import React, { ChangeEvent, useEffect, useState } from 'react';

interface UserDataProps {
  nickname: string;
  email: string;
  passwordCheck: string;
  password: string;
  newPassword: string;
  newPasswordCheck: string;
}

const EditProfilePage = () => {
  const [userData, setUserData] = useState<UserDataProps>({
    nickname: '',
    email: '',
    passwordCheck: '',
    password: '',
    newPassword: '',
    newPasswordCheck: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      const headers = {
        Authorization: `token ${localStorage.getItem(`accessToken`)}`,
      };
      try {
        const response = await instance.get('accounts/profile/', { headers });
        if (response.status === 200) {
          setUserData((prevState) => ({
            ...prevState,
            nickname: response.data.nickname,
            email: response.data.email,
          }));
        }
      } catch (error) {
        alert(error);
      }
    };

    fetchData();
  }, []);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleChangeNickname = async () => {
    try {
      const headers = {
        Authorization: `token ${localStorage.getItem(`accessToken`)}`,
      };
      const response = await instance.put(
        'accounts/profile/',
        {
          email: userData.email,
          nickname: userData.nickname,
          current_password: userData.passwordCheck,
        },
        { headers },
      );
      if (response.status === 200) {
        console.log('닉네임 변경 완료!');
      }
    } catch (error) {
      alert(error);
    }
  };

  const handleChangePassword = async () => {
    try {
      const headers = {
        Authorization: `token ${localStorage.getItem(`accessToken`)}`,
      };
      const response = await instance.put(
        'accounts/profile/',
        {
          email: userData.email,
          nickname: userData.nickname,
          current_password: userData.password,
          new_password: userData.newPassword,
          new_password_confirm: userData.newPasswordCheck,
        },
        { headers },
      );
      if (response.status === 200) {
        console.log('비밀번호 변경 완료!');
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="flex justify-center p-[30px]">
      <div className="flex flex-col w-full bg-white rounded-xl p-[30px] gap-5">
        <div>
          프로필 구역
          <span>{userData.email}</span>
        </div>
        <div className="flex flex-col gap-[10px]">
          <span className="font-bold">닉네임 변경</span>
          <label htmlFor="nickname">닉네임</label>
          <input
            type="text"
            name="nickname"
            value={userData.nickname}
            placeholder={userData.nickname}
            onChange={handleChange}
            className="border border-gray-300"
          />
          <label htmlFor="passwordCheck">비밀번호 확인</label>
          <input
            type="text"
            name="passwordCheck"
            value={userData.passwordCheck}
            onChange={handleChange}
            className="border border-gray-300"
          />
          <button type="button" onClick={handleChangeNickname}>
            닉네임 변경하기
          </button>
        </div>
        <div className="flex flex-col gap-[10px]">
          <span className="font-bold">비밀번호 변경</span>
          <label htmlFor="password">비밀번호</label>
          <input
            type="text"
            name="password"
            value={userData.password}
            onChange={handleChange}
            className="border border-gray-300"
          />
          <label htmlFor="newPassword">새 비밀번호</label>
          <input
            type="text"
            name="newPassword"
            value={userData.newPassword}
            onChange={handleChange}
            className="border border-gray-300"
          />
          <label htmlFor="newPasswordCheck">새 비밀번호 확인</label>
          <input
            type="text "
            name="newPasswordCheck"
            value={userData.newPasswordCheck}
            onChange={handleChange}
            className="border border-gray-300"
          />
          <button type="button" onClick={handleChangePassword}>
            비밀번호 변경하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProfilePage;
