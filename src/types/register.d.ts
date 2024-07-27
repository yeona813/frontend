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

export type infoRef = {
  emailRef: RefObject<HTMLInputElement>;
  passwordRef: RefObject<HTMLInputElement>;
  checkPasswordRef: RefObject<HTMLInputElement>;
  nicknameRef: RefObject<HTMLInputElement>;
};
