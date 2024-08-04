import { instance } from 'api/instance';
import React, { useEffect, useState } from 'react';

// set~Err props로 받기

interface PasswordStoreButtonProps {
  currentPassword: string;
  NewPassword: string;
  checkNewPassword: string;
}

const PasswordStoreButton = ({
  currentPassword,
  NewPassword,
  checkNewPassword,
}: PasswordStoreButtonProps) => {
  // 여기서 현재 비밀번호 확인
  // 새로운 비밀번호 양식 확인
  // 새로운 비밀번호 일치 확인
  // 패스

  const [userEmail, setUserEmail] = useState('');
  const [userNickname, setUserNickname] = useState('');
  const [loginStatus, setLoginStatus] = useState(false);

  const onLoad = async () => {
    try {
      const response = await instance.get('accounts/profile/');

      if (response.status === 200) {
        setUserEmail(response.data.email);
        setUserNickname(response.data.nickname);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const isStatusOK = async () => {
    const dataToSend = {
      email: userEmail,
      password: currentPassword,
    };
    try {
      const response = await instance.post('accounts/profile/', dataToSend);

      if (response.status === 200) {
        setLoginStatus(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    onLoad();
    isStatusOK();
  }, []);

  const onStore = async () => {
    // 여기서 검사 시작
    if (loginStatus === false) {
      console.log('현재 비밀번호가 틀립니다.');
      return;
    }

    if (NewPassword !== checkNewPassword) {
      console.log('새로운 비밀번호가 일치하지 않습니다.');
      return;
    }

    // 패스 못하면 리턴

    // 검사 끝
    onLoad();

    try {
      const body = {
        email: userEmail,
        nickname: userNickname,
        current_password: currentPassword,
        new_password: NewPassword,
        new_password_confirm: checkNewPassword,
      };
      const headers = {
        Authorization: `token ${localStorage.getItem('accessToken')}`,
      };
      const response = await instance.put('accounts/profile/', body, {
        headers,
      });

      if (response.status === 200) {
        console.log('성공');
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section>
      <button
        className="rounded-lg bg-black w-[335px] h-[45.5px] shadow-md text-white mt-5"
        type="button"
        onClick={onStore}
      >
        저장하기
      </button>
    </section>
  );
};

export default PasswordStoreButton;
