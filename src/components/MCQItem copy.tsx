'use client';
import {useState, useEffect} from 'react';
import Explation from './Explation';
import {OptionButton} from './OptionButton';
import {useQuizContext} from '@/context/QuizContext';
import {Question} from '@/types/QuestionType';

export function MCQItem({
  questions,
  questionId,
}: {
  questions: Question | undefined;
  questionId: number;
}) {
  const [showAnswer, setShowAnswer] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const {currentQuestionIndex} = useQuizContext();
  useEffect(() => {
    setShowAnswer(false);
    setIsCorrect(null);
  }, [currentQuestionIndex]);

  return (
    <div
      className={`flex h-[600px] w-full items-center justify-center gap-4 p-4 md:px-24 ${currentQuestionIndex === questionId ? 'flex' : 'hidden'}`}>
      <div className="flex h-auto w-full max-w-3xl flex-col rounded-xl bg-white p-4 shadow-xl dark:bg-gray-800 md:p-8">
        <div className="flex flex-grow flex-col">
          <h2 className="whitespace-pre-wrap text-lg font-semibold text-gray-900 dark:text-gray-100 md:text-xl">
            {questions?.description}
          </h2>
          <div className="mt-4 space-y-4">
            {questions?.options.map((option, index) => (
              <OptionButton
                questionId={questionId}
                isCorrect={isCorrect}
                key={index}
                option={option}
                showAnswer={showAnswer ?? false}
                setShowAnswer={setShowAnswer}
                setIsCorrect={setIsCorrect}
              />
            ))}
          </div>
          {showAnswer && (
            <p
              className={`mt-4 rounded-lg p-3 ${
                isCorrect
                  ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100'
                  : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100'
              }`}>
              {isCorrect ? '✨ Correct!' : '❌ Wrong answer'}
            </p>
          )}
        </div>
      </div>
      {showAnswer && questions && !isCorrect && (
        <Explation explanation={questions.detailed_solution} />
      )}
    </div>
  );
}
