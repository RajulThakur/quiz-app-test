import {rankings} from '@/data/rankings';
import CrownIcon from '@/icons/Crown';

export default function RankingPage() {
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-lg dark:bg-gray-800">
      <div className="border-b border-gray-200 px-6 py-4 dark:border-gray-700">
        <h3 className="text-xl font-bold dark:text-white">Global Rankings</h3>
      </div>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        {rankings.map((player, index) => (
          <div
            key={player.id}
            className="flex items-center justify-between px-6 py-4 transition-colors duration-200 hover:bg-gray-50 dark:hover:bg-gray-700/50"
            style={{
              animationDelay: `${index * 100}ms`,
              animation: 'fadeInLeft 0.5s ease-out forwards',
            }}>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <span className="absolute -left-2 -top-2 text-2xl font-bold text-gray-400">
                  #{index + 1}
                </span>
                <img
                  src={player.avatar}
                  alt={player.name}
                  className="h-12 w-12 rounded-full ring-2 ring-blue-500 ring-offset-2 dark:ring-blue-400"
                />
              </div>
              <div>
                <h4 className="font-bold dark:text-white">{player.name}</h4>
                <span className="text-sm text-gray-500 dark:text-gray-400">{player.rank}</span>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="text-right">
                <div className="text-xl font-bold text-blue-600 dark:text-blue-400">
                  {player.score.toLocaleString()}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">points</div>
              </div>
              <div className="flex items-center rounded-full bg-orange-100 px-4 py-2 text-orange-500 dark:bg-orange-900/30">
                <CrownIcon className="mr-2 h-5 w-5 animate-pulse" />
                <span className="font-bold">{player.streak}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
