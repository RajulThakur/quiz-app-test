import {QuizStorageQuestionData} from '@/types/types';

interface LocalStorageData {
  [questionId: number]: QuizStorageQuestionData;
}

export default function storeInLocalStorage(
  quizId: string,
  questionId: number | undefined,
  data: QuizStorageQuestionData
) {
  if (!quizId || questionId === undefined) return;

  const storageKey = `quiz_${quizId}`;

  try {
    // Get existing quiz data or initialize empty object
    const existingData = localStorage.getItem(storageKey);
    const quizData: LocalStorageData = existingData ? JSON.parse(existingData) : {};

    // Update the specific question data
    quizData[questionId] = data;

    // Store back in localStorage
    localStorage.setItem(storageKey, JSON.stringify(quizData));
  } catch (error) {
    console.error('Error storing quiz data:', error);
  }
}
