import ArrowNarrowRightIcon from '@/icons/ArrowRight';
import AwardIcon from '@/icons/Award';
import BrainIcon from '@/icons/Brain';
import ClockIcon from '@/icons/Clock';
import SparkleIcon from '@/icons/Sparkle';
import TargetIcon from '@/icons/Target';
import {HomeFeaturesProps} from '@/types/HomeFeature';
import Link from 'next/link';

const features = [
  {
    icon: TargetIcon,
    title: 'Multiple Topics',
    description:
      'Diverse questions covering various subjects to test your knowledge across different fields.',
  },
  {
    icon: ClockIcon,
    title: 'Quick Feedback',
    description: 'Instant answers and explanations to help you learn and improve your knowledge.',
  },
  {
    icon: AwardIcon,
    title: 'Track Progress',
    description: 'Monitor your score and progress as you advance through the questions.',
  },
];

function HomeFeatures({feature}: HomeFeaturesProps) {
  return (
    <div className="rounded-xl bg-white p-6 shadow-md transition-shadow hover:shadow-lg dark:bg-gray-800 md:p-6">
      <div className="mb:mb-0 mb-4 flex flex-row items-center gap-4 md:flex-col md:items-start">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400">
          <feature.icon size="xl" />
        </div>
        <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-gray-100">
          {feature.title}
        </h3>
      </div>
      <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
    </div>
  );
}

export default async function Home() {
  return (
    <div className="flex h-dvh snap-y snap-mandatory flex-col overflow-y-auto bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-blue-950">
      {/* Hero Section */}
      <div className="relative mx-auto flex min-h-[100dvh] max-w-7xl flex-1 snap-start items-center px-4 pb-8 pt-12 sm:px-6 sm:pb-16 sm:pt-20 md:min-h-0 lg:px-8">
        <div className="w-full text-center">
          <div className="mb-4 flex justify-center sm:mb-6">
            <div className="rounded-full bg-blue-100 p-2 dark:bg-blue-900 sm:p-3">
              <BrainIcon
                strokeWidth={2}
                className="h-8 w-8 text-blue-600 dark:text-blue-400 sm:h-12 sm:w-12"
              />
            </div>
          </div>
          <h1 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-100 sm:mb-6 sm:text-4xl md:text-5xl">
            Test Your Knowledge
            <span className="ml-2 text-blue-600 dark:text-blue-400">
              <SparkleIcon className="mb-1 inline-block h-8 w-8 text-blue-600 dark:text-blue-400 sm:mb-2 sm:h-10 sm:w-10" />
            </span>
          </h1>
          <p className="mx-auto mb-6 max-w-2xl px-4 text-lg text-gray-600 dark:text-gray-300 sm:mb-8 sm:text-xl">
            Challenge yourself with our interactive quiz game. Learn new facts and compete for high
            scores!
          </p>
          <Link
            href={'/menu/contest'}
            className="inline-flex transform items-center rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-lg transition-all duration-200 hover:scale-105 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 sm:px-8 sm:py-4 sm:text-lg">
            Start Quiz
            <ArrowNarrowRightIcon className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="mx-auto h-auto max-w-7xl snap-start px-4 py-6 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <HomeFeatures
              key={index}
              feature={feature}
            />
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="mx-auto max-w-7xl snap-end px-4 py-4 opacity-85 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center">
          <BrainIcon
            strokeWidth={2}
            className="mr-2 h-6 w-6 text-blue-600 dark:text-blue-400"
          />
          <p className="text-gray-400 dark:text-gray-500">
            © 2024 Quiz Game. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
