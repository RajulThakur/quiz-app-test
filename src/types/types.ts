import {IconProps} from './IconsType';

export interface Option {
  id: number;
  description: string;
  is_correct: boolean;
  question_id: number;
  created_at: string;
  updated_at: string;
  unanswered: boolean;
  photo_url: string | null;
}

export type AppScreen = 'home' | 'quiz';

export type TabType = 'contest' | 'missions' | 'rankings';

export interface Mission {
  id: string | number;
  title: string;
  description: string;
  progress: number;
  total: number;
  reward: string;
  icon: React.ComponentType<IconProps>;
}

export interface RankingPlayer {
  id: string;
  name: string;
  rank: string;
  score: number;
  streak: number;
  avatar: string;
}

export interface GameState {
  showAnswer: boolean;
  isCorrect: boolean | null;
}

export interface QuizStorageQuestionData {
  isCorrect: boolean;
  isAnswered: boolean;
  chosenOption?: number;
}
export interface CreateUserData {
  email: string;
  name?: string;
  image?: string;
  password?: string;
}
