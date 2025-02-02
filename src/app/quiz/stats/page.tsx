"use client";
import { useEffect, useState } from "react";
import Confetti from "react-confetti";
import SparkleIcon from "@/icons/Sparkle";
import TrophyIcon from "@/icons/Trophy";
import FlameIcon from "@/icons/Flame";
import Link from "next/link";
import HomeIcon from "@/icons/Home";

export default function StatsPage() {
  // Replace context hooks with dummy data
  const { score, streak, exp } = {
    score: 85,
    streak: 7,
    exp: 150,
  };

  const { quizInformation } = {
    quizInformation: {
      title: "JavaScript Fundamentals Quiz",
      questionLength: 100,
      correctAnswerMark: 1,
    },
  };

  const { title, questionLength, correctAnswerMark } = quizInformation;
  const totalScore = correctAnswerMark * questionLength;
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    // Configure confetti timer
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 5000);

    // Play success sound
    const audio = new Audio("/sounds/final.mp3"); // Adjust the path to your sound file
    audio.play().catch((error) => {
      console.log("Audio playback failed:", error);
    });

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4 dark:from-gray-900 dark:to-gray-800'>
      {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          recycle={true}
          numberOfPieces={200}
        />
      )}

      <div className='w-full max-w-md'>
        <div className='rounded-2xl bg-white p-8 shadow-xl dark:bg-gray-800'>
          <div className='mb-8 text-center'>
            <div className='mb-4 inline-block rounded-full bg-blue-100 p-3 dark:bg-blue-900/30'>
              <TrophyIcon className='h-12 w-12 text-blue-600 dark:text-blue-400' />
            </div>
            <h1 className='text-3xl font-bold text-gray-900 dark:text-white'>
              Quiz Completed!
            </h1>
            <p className='mt-2 text-gray-500 dark:text-gray-400'>{title}</p>
          </div>

          <div className='mb-8 space-y-6'>
            {/* Score Display */}
            <div className='flex items-center justify-between rounded-lg bg-blue-50 p-4 dark:bg-blue-900/30'>
              <span className='text-lg font-semibold text-gray-700 dark:text-gray-300'>
                Score
              </span>
              <div className='flex items-center gap-2 text-xl font-bold text-blue-600 dark:text-blue-400'>
                <TrophyIcon size='sm' />
                {score}/{totalScore}
              </div>
            </div>

            {/* Streak Display */}
            <div className='flex items-center justify-between rounded-lg bg-orange-50 p-4 dark:bg-orange-900/30'>
              <span className='text-lg font-semibold text-gray-700 dark:text-gray-300'>
                Streak
              </span>
              <div className='flex items-center gap-2 text-xl font-bold text-orange-600 dark:text-orange-400'>
                <FlameIcon size='sm' />
                {streak}
              </div>
            </div>

            {/* EXP Display */}
            <div className='flex items-center justify-between rounded-lg bg-purple-50 p-4 dark:bg-purple-900/30'>
              <span className='text-lg font-semibold text-gray-700 dark:text-gray-300'>
                Experience Gained
              </span>
              <div className='flex items-center gap-2 text-xl font-bold text-purple-600 dark:text-purple-400'>
                <SparkleIcon size='sm' />
                {exp}
              </div>
            </div>
          </div>

          <Link
            href='/menu/contest'
            className='flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition-all hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-blue-500 dark:hover:bg-blue-600'>
            <HomeIcon size='sm' />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
