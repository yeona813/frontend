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
  id: number;
  nickname: string;
  like_quotes: number[];
  email: string;
  profile_image: string;
  registered_quotes: quote[];
  followings: string[];
  followers: string[];
  following_count: number;
  follower_count: number;
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
