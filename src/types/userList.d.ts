export type quote = {
  id: number;
  content: string;
  description: string;
  created_at: string;
  like_count: number;
};

export type smallUser = {
  id: number;
  email: string;
  nickname: string;
  like_quotes: number[];
};

export type user = {
  email: string;
  follower_count: number;
  followers: number[];
  following_count: number;
  followings: followings[];
  like_quotes: number[];
  nickname: string;
  profile_image: string;
  registered_quotes: quote[];
};

export type realQuote = {
  id: number;
  content: string;
  description: string;
  author: string;
  image: null;
  created_at: string;
  like_count: 0;
  user_author: null;
};

export type listUser = {
  nickname: string;
  like_quotes: string[];
  email: string;
  profile_image: string;
  registered_quotes: quote[];
  followings: followings[];
  followers: number[];
  following_count: number;
  follower_count: number;
};

export type followings = {
  id: number;
  nickname: string;
  registered_quotes: quote[];
};
