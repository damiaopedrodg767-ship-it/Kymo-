
export enum NavItem {
  FEED = 'feed',      // Facebook/Insta hybrid
  VISION = 'vision',  // TikTok/Reels style
  CONNECT = 'connect',// WhatsApp style
  EXPLORE = 'explore' // Discovery/AI
}

export interface Post {
  id: string;
  author: string;
  avatar: string;
  content: string;
  image?: string;
  likes: number;
  comments: number;
  timestamp: string;
}

export interface Message {
  id: string;
  sender: string;
  text: string;
  timestamp: string;
  isMe: boolean;
}

export interface Chat {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  unread: number;
}

export interface Video {
  id: string;
  url: string;
  author: string;
  description: string;
  likes: string;
  comments: string;
}
