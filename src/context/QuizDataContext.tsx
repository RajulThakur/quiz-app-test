import {createContext, ReactNode, useContext, useState} from 'react';
interface QuizDataContextType {
  quizInformation: {
    title: string;
    correctAnswerMark: number;
    wrongAnswerMark: number;
    questionLength: number;
  };
  setQuizInformation: React.Dispatch<
    React.SetStateAction<{
      title: string;
      correctAnswerMark: number;
      wrongAnswerMark: number;
      questionLength: number;
    }>
  >;
}
const intitalValue: QuizDataContextType = {
  quizInformation: {
    title: 'Example Quiz',
    correctAnswerMark: 1,
    wrongAnswerMark: 0,
    questionLength: 0,
  },
  setQuizInformation: () => {}, // Default no-op function
};
const QuizDataContext = createContext<QuizDataContextType>(intitalValue);
export function QuizDataProvider({children}: {children: ReactNode}) {
  const [quizInformation, setQuizInformation] = useState({
    title: 'Example Quiz',
    correctAnswerMark: 1,
    wrongAnswerMark: 0,
    questionLength: 3,
  });
  return (
    <QuizDataContext.Provider value={{quizInformation, setQuizInformation}}>
      {children}
    </QuizDataContext.Provider>
  );
}
export function useQuizDataContext() {
  const context = useContext(QuizDataContext);
  if (!context) throw new Error('useQuizDataContext must be used within a QuizDataProvider');
  return context;
}
