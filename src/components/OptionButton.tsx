'use client';
import {useQuizContext} from '@/context/QuizContext';
import {useQuizDataContext} from '@/context/QuizDataContext';
import storeInLocalStorage from '@/helpers/storeQuizInLocalStorage';
import {Option} from '@/types/QuestionType';
import {useParams} from 'next/navigation';
import {useState, useEffect} from 'react';

interface QuizAnswerData {
  isCorrect: boolean;
  isAnswered: boolean;
  choosedOption: number;
}

export function OptionButton({
  questionId,
  option,
  showAnswer,
  setShowAnswer,
  isCorrect,
  setIsCorrect,
}: {
  questionId: string | undefined | number;
  option: Option;
  showAnswer: boolean;
  setShowAnswer: (showAnswer: boolean) => void;
  isCorrect: boolean | null;
  setIsCorrect: (isCorrect: boolean | null) => void;
}) {
  const [isClicked, setIsClicked] = useState(false);
  const {setScore, streak, setStreak, setExp} = useQuizContext();
  const {quizInformation} = useQuizDataContext();
  const {correctAnswerMark, wrongAnswerMark} = quizInformation;
  const quizID = useParams();
  const quizIDString = quizID?.quizID as string;
  const setQuizData = (questionId: string | number | undefined, data: QuizAnswerData) => {
    const numericId = typeof questionId === 'string' ? parseInt(questionId) : questionId;
    storeInLocalStorage(quizIDString, numericId, data);
  };
  function handleClick() {
    setIsClicked(true);
    setShowAnswer(true);
    setIsCorrect(option.is_correct);

    if (option.is_correct) {
      // Handle correct answer
      setScore((prevScore) => prevScore + correctAnswerMark);
      setStreak((prevStreak) => prevStreak + 1);
      setQuizData(questionId, {isCorrect: true, isAnswered: true, choosedOption: option.id});
      // Calculate exp multiplier based on streak
      const expMultiplier = 1 + streak / 10;
      const expGain = Math.round(correctAnswerMark * 100 * expMultiplier);
      setExp((prevExp) => prevExp + expGain);
    } else {
      // Handle wrong answer
      setScore((prevScore) => prevScore - wrongAnswerMark);
      setStreak(0); // Reset streak
      setQuizData(questionId, {isCorrect: false, isAnswered: true, choosedOption: option.id});
    }
  }

  useEffect(() => {
    setIsClicked(false);
  }, [option]);

  return (
    <button
      disabled={showAnswer}
      onClick={handleClick}
      className={`w-full rounded-lg border-2 p-4 text-left font-mono transition-all duration-300 ease-in-out ${
        showAnswer
          ? isClicked && !option.is_correct
            ? 'border-red-500 bg-red-50 dark:bg-red-900/30'
            : option.is_correct
              ? 'border-green-500 bg-green-50 dark:bg-green-900/30'
              : 'border-gray-300 dark:border-gray-600'
          : 'border-gray-300 hover:border-gray-400 dark:border-gray-600 dark:hover:border-gray-500'
      }`}>
      <span className="text-gray-900 dark:text-gray-100">{option.description}</span>
    </button>
  );
}
