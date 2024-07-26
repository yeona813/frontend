export type info = {
  email: string;
  password: string;
  checkPassword: string;
  nickname: string;
};

export type err = {
  emailErr: boolean;
  passwordErr: boolean;
  checkPasswordErr: boolean;
  nicknameErr: boolean;
};
