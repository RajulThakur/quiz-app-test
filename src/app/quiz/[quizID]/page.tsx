"use client";
import { MCQItem } from "@/components/MCQItem";
import { QuizFooter } from "@/components/QuizFooter";
import QuizNav from "@/components/QuizNav";
import { QuizSkeleton } from "@/components/QuizSkeleton";
import { useQuizDataContext } from "@/context/QuizDataContext";
import { Question } from "@/data/Question";
import { Quiz } from "@/types/QuestionType";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

function QuizPage() {
  const params = useParams();
  const quizID = params?.quizID as string;
  const [isLoading, setIsLoading] = useState(true);
  const [selectedTopic, setSelectedTopic] = useState<Quiz | null>(null);
  const { setQuizInformation } = useQuizDataContext();

  // Add audio references
  const correctSound = new Audio("/sounds/correct.mp3");
  const wrongSound = new Audio("/sounds/wrong.mp3");

  // Add function to play sounds
  const playSound = (isCorrect: boolean) => {
    if (isCorrect) {
      correctSound.currentTime = 0;
      correctSound.play();
    } else {
      wrongSound.currentTime = 0;
      wrongSound.play();
    }
  };

  useEffect(() => {
    const fetchTopic = async () => {
      // Simulating API call with sample data
      setIsLoading(true);
      new Promise(() => {
        setTimeout(() => {}, 1000);
      });
      const data = Question[0];
      setSelectedTopic(data);
      setIsLoading(false);
    };

    fetchTopic();
  }, [quizID]);
  useEffect(() => {
    if (selectedTopic) {
      setQuizInformation({
        title: selectedTopic?.title,
        correctAnswerMark: +selectedTopic?.correct_answer_marks,
        wrongAnswerMark: +selectedTopic?.negative_marks,
        questionLength: +selectedTopic.questions.length,
      });
    }
  }, [selectedTopic, setQuizInformation]);

  return (
    <div className='flex min-h-screen flex-col items-center justify-between bg-gradient-to-br from-blue-50 to-indigo-100 p-4 text-black dark:from-gray-900 dark:to-gray-800 dark:text-white'>
      <QuizNav />
      {!selectedTopic || isLoading ? (
        <QuizSkeleton />
      ) : (
        <MCQItem
          questions={selectedTopic.questions}
          onAnswerSubmit={playSound}
        />
      )}
      <QuizFooter />
    </div>
  );
}

export default QuizPage;
