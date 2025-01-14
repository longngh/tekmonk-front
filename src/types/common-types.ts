import { BackgroundCard } from "@/components/shop/BackgroundCard";
import { LeaderboardTable } from "./../components/leaderboard/LeaderboardTable";
export type Event = {
  title: string;
  day: string;
  month: string;
  weekday: string;
  timeRange: string;
  imageUrl: string;
  createdAt: string;
};
export type User = {
  id: string;
  username: string;
  email: string;
  userRank: string;
  specialName: string;
  imageURL?: string;
  twitterName?: string;
  role: {
    name: string;
  };
};
export interface Certificate {
  name: string;
  type: string;
  progress: string;
  mission: string;
  imageUrl?: string;
  author: string;
  createdAt: string;
}
export type Project = {
  name: string;
  author: User;
  thumbnailUrl: string;
  imageUrls: string[];
  createdAt: string;
  projectCategories: string[];
  description: string;
  likeCount: string;
  commentCount: string;
};

export type LeaderboardData = {
  user: User;
  score: string;
};

// declare type for type, not interface
export type Recruitment = {
  imageUrl: string;
  title: string;
  description: string;
  tags: string[];
};

export type EventDetail = {
  title: string;
  eventTime: string;
  eventVenue: string;
  address: string;
  month: string;
  day: string;
  weekday: string;
  content: string;
};

export type Achievement = {
  name: string;
  imageUrl: string;
};

export type Notification = {
  title: string;
  createdAt: string;
};

export type AvatarShop = {
  id: string;
  image: string;
  title: string;
  price: string;
};

export type BackgroundShop = {
  image: string;
  title: string;
  price: string;
};
