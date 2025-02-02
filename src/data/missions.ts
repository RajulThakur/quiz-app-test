import {Mission} from '@/types/types';
import TargetIcon from '@/icons/Target';
import AwardIcon from '@/icons/Award';
import ZapIcon from '@/icons/Zap';
import StarIcon from '@/icons/Star';
import FlameIcon from '@/icons/Flame';

export const missions: Mission[] = [
  {
    id: 'daily-5',
    title: 'Daily Champion',
    description: 'Complete 5 quizzes today',
    progress: 2,
    total: 5,
    reward: '100 points',
    icon: TargetIcon,
  },
  {
    id: 'perfect-score',
    title: 'Perfect Score',
    description: 'Get 100% on any quiz',
    progress: 0,
    total: 1,
    reward: '200 points',
    icon: AwardIcon,
  },
  {
    id: 'streak-7',
    title: 'Week Warrior',
    description: 'Maintain a 7-day streak',
    progress: 3,
    total: 7,
    reward: '300 points',
    icon: FlameIcon,
  },
  {
    id: 'quick-thinker',
    title: 'Quick Thinker',
    description: 'Complete a quiz in under 2 minutes',
    progress: 0,
    total: 1,
    reward: '150 points',
    icon: ZapIcon,
  },
  {
    id: 'all-topics',
    title: 'Knowledge Master',
    description: 'Complete one quiz from each topic',
    progress: 1,
    total: 3,
    reward: '250 points',
    icon: StarIcon,
  },
];
