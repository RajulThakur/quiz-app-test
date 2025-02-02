'use client';
import {useQuizContext} from '@/context/QuizContext';
import TrophyIcon from '@/icons/Trophy';

export function ScoreDisplay({totalScore}: {totalScore: number}) {
  const {score} = useQuizContext();
  return (
    <div className="flex items-center gap-2 text-xl font-bold text-yellow-500">
      <TrophyIcon size="md" />
      <span>
        Score: {score}/{totalScore}
      </span>
    </div>
  );
}
