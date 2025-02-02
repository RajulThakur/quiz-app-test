'use client';
import {MCQItem} from '@/components/MCQItem';
import {QuizFooter} from '@/components/QuizFooter';
import QuizNav from '@/components/QuizNav';
import {QuizSkeleton} from '@/components/QuizSkeleton';
import {useQuizDataContext} from '@/context/QuizDataContext';
import {Question} from '@/data/Question';
import {Quiz} from '@/types/QuestionType';
import {useParams} from 'next/navigation';
import {useEffect, useState} from 'react';

function QuizPage() {
  const params = useParams();
  const quizID = params?.quizID as string;
  const [isLoading, setIsLoading] = useState(true);
  const [selectedTopic, setSelectedTopic] = useState<Quiz | null>(null);
  const {setQuizInformation} = useQuizDataContext();
  useEffect(() => {
    const fetchTopic = async () => {
      // Simulating API call with sample data
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSelectedTopic(Question[0]);
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
    <div className="flex min-h-screen flex-col items-center justify-between bg-gradient-to-br from-blue-50 to-indigo-100 p-4 text-black dark:from-gray-900 dark:to-gray-800 dark:text-white">
      <QuizNav />
      {!selectedTopic || isLoading ? (
        <QuizSkeleton />
      ) : (
        selectedTopic.questions.map((question, index) => (
          <MCQItem
            key={question.id}
            questions={question}
            questionId={index}
          />
        ))
      )}
      <QuizFooter />
    </div>
  );
}

export default QuizPage;
