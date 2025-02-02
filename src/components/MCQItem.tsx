'use client';
import {Question} from '@/types/QuestionType';
import {useState, useEffect} from 'react';
import Explation from './Explation';
import {OptionButton} from './OptionButton';
import {useQuizContext} from '@/context/QuizContext';
import {getQuestionDataFromLocalStorage} from '@/helpers/getQuizLocalStorage';
import {useParams} from 'next/navigation';

export function MCQItem({
  questions,
  onAnswerSubmit,
}: {
  questions: Question[] | undefined;
  onAnswerSubmit: (isCorrect: boolean) => void;
}) {
  const quizID = useParams();
  const {currentQuestionIndex} = useQuizContext();
  const currentQuestion = questions?.[currentQuestionIndex];
  const quizIDString = quizID?.quizID as string;
  const questionId = currentQuestion?.id ? +currentQuestion?.id : undefined;
  const [showAnswer, setShowAnswer] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const questionData = getQuestionDataFromLocalStorage(quizIDString, questionId);
  const isAnswered = questionData?.isAnswered;
  const isMCQCorrect = questionData?.isCorrect;

  useEffect(() => {
    setShowAnswer(false);
    setIsCorrect(null);
  }, [currentQuestionIndex]);

  return (
    <div className="flex h-[600px] w-full items-center justify-center gap-4 p-4 md:px-24">
      <div className="flex h-auto w-full max-w-3xl flex-col rounded-xl bg-white p-4 shadow-xl dark:bg-gray-800 md:p-8">
        <div className="flex flex-grow flex-col">
          <h2 className="whitespace-pre-wrap text-lg font-semibold text-gray-900 dark:text-gray-100 md:text-xl">
            {currentQuestion?.description}
          </h2>
          <div className="mt-4 space-y-4">
            {currentQuestion?.options.map((option, index) => (
              <OptionButton
                questionId={questionId}
                onAnswerSubmit={onAnswerSubmit}
                key={index}
                option={option}
                showAnswer={showAnswer ?? false}
                setShowAnswer={setShowAnswer}
                setIsCorrect={setIsCorrect}
              />
            ))}
          </div>
          {(showAnswer || isAnswered) && (
            <p
              className={`mt-4 rounded-lg p-3 ${
                isCorrect || isMCQCorrect
                  ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100'
                  : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100'
              }`}>
              {isCorrect || isMCQCorrect ? '✨ Correct!' : '❌ Wrong answer'}
            </p>
          )}
        </div>
      </div>
      {(showAnswer || isAnswered) &&
        currentQuestion &&
        !(isCorrect || isMCQCorrect) && (
          <Explation explanation={currentQuestion.detailed_solution} />
        )}
    </div>
  );
}
