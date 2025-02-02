import {Quiz} from '@/types/QuestionType';
import Link from 'next/link';

export function TopicItem({topic}: {topic: Quiz}) {
  return (
    <div
      key={topic.id}
      className="transform rounded-xl bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:bg-gray-800"
      style={{
        animation: 'fadeInUp 0.5s ease-out forwards',
      }}>
      <h3 className="mb-2 text-xl font-bold dark:text-white">{topic.title}</h3>
      <p className="mb-4 text-gray-600 dark:text-gray-300">{topic.topic}</p>

      <div className="mb-6 flex justify-between text-sm">
        <div className="flex items-center">
          <span className="mr-1 text-green-500">✓</span>
          <span className="text-gray-600 dark:text-gray-300">
            Correct: +{topic.correct_answer_marks}
          </span>
        </div>
        <div className="flex items-center">
          <span className="mr-1 text-red-500">✗</span>
          <span className="text-gray-600 dark:text-gray-300">Wrong: -{topic.negative_marks}</span>
        </div>
      </div>

      <Link
        href={`/quiz/${topic.id}`}
        className="w-full transform rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-3 font-semibold text-white shadow-md transition-all duration-300 hover:scale-105 hover:from-blue-700 hover:to-blue-600 hover:shadow-lg">
        Start Quiz
      </Link>
    </div>
  );
}
