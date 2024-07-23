export type info = {
  email: string;
  password: string;
  checkPassword: string;
  nickname: string;
  name: string;
  age: number;
  sex: string;
  birth: string;
  phone: string;
};

export type err = {
  emailErr: boolean;
  passwordErr: boolean;
  checkPasswordErr: boolean;
};
