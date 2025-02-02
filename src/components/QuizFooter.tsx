'use client';
import ArrowRightIcon from '@/icons/ArrowRight';
import {useQuizContext} from '@/context/QuizContext';
import ArrowLeftIcon from '@/icons/ArrowLeft';
import {useQuizDataContext} from '@/context/QuizDataContext';
export function QuizFooter() {
  const {currentQuestionIndex, setCurrentQuestionIndex} = useQuizContext();
  const handleNextQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };
  const handlePreviousQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex - 1);
  };
  const {quizInformation} = useQuizDataContext();
  const questionLength = quizInformation?.questionLength;
  const showPreviousButton = currentQuestionIndex > 0;
  const showNextButton = currentQuestionIndex < questionLength - 1;
  return (
    <div className="flex w-full items-center justify-between px-4 py-6">
      {showPreviousButton ? (
        <button
          onClick={handlePreviousQuestion}
          className="flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition-all hover:bg-blue-700 hover:shadow-md disabled:cursor-not-allowed disabled:opacity-50">
          <ArrowLeftIcon className="h-5 w-5" />
          Previous
        </button>
      ) : (
        <div />
      )}

      <span className="font-medium text-gray-600">
        {currentQuestionIndex + 1} of {questionLength}
      </span>

      {showNextButton ? (
        <button
          onClick={handleNextQuestion}
          className="flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition-all hover:bg-blue-700 hover:shadow-md disabled:cursor-not-allowed disabled:opacity-50">
          Next
          <ArrowRightIcon className="h-5 w-5" />
        </button>
      ) : (
        <div />
      )}
    </div>
  );
}
