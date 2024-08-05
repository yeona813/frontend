import { instance } from 'api/instance';
import ChangeNickname from 'components/editProfile/ChangeNickname';
import ChangePassword from 'components/editProfile/ChangePassword';
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
        setUserData((prevState) => ({
          ...prevState,
          passwordCheck: '',
        }));
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
      <div className="flex flex-col w-full bg-white rounded-xl p-[30px] gap-[25px]">
        <div>
          프로필 구역
          <span>{userData.email}</span>
          {/* 프로필 부분 수정 필요! */}
        </div>
        <ChangeNickname
          nickname={userData.nickname}
          passwordCheck={userData.passwordCheck}
          handleChange={handleChange}
          handleClickButton={handleChangeNickname}
        />
        <ChangePassword
          password={userData.password}
          newPassword={userData.newPassword}
          newPasswordCheck={userData.newPasswordCheck}
          handleChange={handleChange}
          handleClickButton={handleChangePassword}
        />
      </div>
    </div>
  );
};

export default EditProfilePage;
