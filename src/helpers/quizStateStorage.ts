interface QuizState {
  score: number;
  streak: number;
  exp: number;
  currentQuestionIndex: number;
}

export function saveQuizState(quizId: string, state: QuizState) {
  if (typeof window !== "undefined") {
    localStorage.setItem(`quiz_state_${quizId}`, JSON.stringify(state));
  }
}

export function getQuizState(quizId: string): QuizState | null {
  if (typeof window !== "undefined") {
    const savedState = localStorage.getItem(`quiz_state_${quizId}`);
    return savedState ? JSON.parse(savedState) : null;
  }
  return null;
}

export function clearQuizState(quizId: string) {
  if (typeof window !== "undefined") {
    localStorage.removeItem(`quiz_state_${quizId}`);
  }
}
