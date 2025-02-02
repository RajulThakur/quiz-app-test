'use client';
import {useQuizContext} from '@/context/QuizContext';
import {ProgressBar} from './ProgressBar';
import {ScoreDisplay} from './ScoreDisplay';
import Flame from '@/icons/Flame';
import SparkleIcon from '@/icons/Sparkle';
import {useQuizDataContext} from '@/context/QuizDataContext';
import {useRouter} from 'next/navigation';
import ArrowLeftIcon from '@/icons/ArrowLeft';

function QuizNav() {
  const {currentQuestionIndex, streak, exp} = useQuizContext();
  const {quizInformation} = useQuizDataContext();
  const {title, questionLength, correctAnswerMark} = quizInformation;
  const totalScore = correctAnswerMark * questionLength;
  const router = useRouter();
  return (
    <div className="w-full">
      <div className="relative rounded-xl bg-white p-6 shadow-lg dark:bg-gray-800">
        <div className="mb-6 flex w-full items-center justify-between">
          <div className="flex items-center gap-4">
            {/* Back Button */}
            <button
              onClick={() => router.push('/menu/contest')}
              className="flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2 font-semibold text-gray-600 transition-all hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600">
              <ArrowLeftIcon size="sm" />
              Back
            </button>
            <h1 className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-2xl font-bold text-transparent dark:from-gray-200 dark:to-gray-400">
              {title}
            </h1>
          </div>
          <div className="flex items-center gap-4">
            {/* Streak Counter */}
            <div className="group relative">
              <div className="flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-100 via-orange-200 to-orange-100 px-5 py-2 transition-all duration-300 hover:from-orange-200 hover:to-orange-300">
                <span
                  key={streak}
                  className="min-w-[1.5rem] text-center text-lg font-bold text-orange-600 transition-transform duration-300 group-hover:scale-110">
                  {streak}
                </span>
                <div className="relative">
                  <Flame
                    className="h-6 w-6 animate-[flame_2s_ease-in-out_infinite] text-orange-500 dark:text-orange-400"
                    style={{
                      filter: 'drop-shadow(0 0 2px rgba(251, 146, 60, 0.5))',
                    }}
                  />
                  <div className="absolute inset-0 animate-[burn_1.5s_ease-in-out_infinite]" />
                </div>
              </div>
            </div>

            {/* Experience Points */}
            <div className="group relative">
              <div className="flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-100 via-purple-200 to-purple-100 px-5 py-2 transition-all duration-300 hover:from-purple-200 hover:to-purple-300">
                <span className="min-w-[2rem] text-center text-lg font-bold text-purple-600 transition-transform duration-300 group-hover:scale-110">
                  {exp}
                </span>
                <div className="relative">
                  <SparkleIcon
                    className="h-5 w-5 animate-[sparkle_2s_ease-in-out_infinite] text-purple-500"
                    style={{
                      filter: 'drop-shadow(0 0 2px rgba(147, 51, 234, 0.5))',
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Score Display */}
            <ScoreDisplay totalScore={totalScore} />
          </div>
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 w-full px-6 pb-4">
          <ProgressBar
            total={questionLength}
            current={currentQuestionIndex + 1}
          />
        </div>
      </div>
    </div>
  );
}

export default QuizNav;
