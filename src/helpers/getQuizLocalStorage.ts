export function getQuestionDataFromLocalStorage(
  quizId: string,
  questionId: string | undefined | number
) {
  const storageKey = `quiz_${quizId}`;
  const data = localStorage.getItem(storageKey);
  const quizData = data ? JSON.parse(data) : {};
  if (questionId === undefined) return quizData;
  return quizData[questionId];
}
