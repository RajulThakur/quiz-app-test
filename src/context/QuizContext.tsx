import {createContext, ReactNode, useContext, useState} from 'react';

// Define the context type
type QuizContextType = {
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  currentQuestionIndex: number;
  setCurrentQuestionIndex: React.Dispatch<React.SetStateAction<number>>;
  streak: number;
  setStreak: React.Dispatch<React.SetStateAction<number>>;
  exp: number;
  setExp: React.Dispatch<React.SetStateAction<number>>;
};

const QuizContext = createContext<QuizContextType | undefined>(undefined);

function QuizProvider({children}: {children: ReactNode}) {
  const [score, setScore] = useState<number>(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [streak, setStreak] = useState<number>(0);
  const [exp, setExp] = useState<number>(0);
  return (
    <QuizContext.Provider
      value={{
        score,
        setScore,
        currentQuestionIndex,
        setCurrentQuestionIndex,
        streak,
        setStreak,
        exp,
        setExp,
      }}>
      {children}
    </QuizContext.Provider>
  );
}

function useQuizContext(): QuizContextType {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error('useQuizContext must be used within a QuizProvider');
  }
  return context;
}

export {QuizProvider, useQuizContext};
