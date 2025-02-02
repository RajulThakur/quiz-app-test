import MedalIcon from '@/icons/Medal';
import {Mission as MissionType} from '@/types/types';
import {ProgressBar} from './ProgressBar';

export function MissionItem({mission}: {mission: MissionType}) {
  return (
    <div
      className="flex transform flex-col gap-2 rounded-xl bg-white p-4 shadow-lg transition-all duration-300 hover:-translate-x-2 dark:bg-gray-800"
      style={{
        animation: 'slideInRight 0.5s ease-out forwards',
      }}>
      <div className="flex gap-4">
        <div className="transform rounded-xl bg-gradient-to-br from-green-100 to-green-50 p-4 transition-transform duration-300 hover:rotate-12 dark:from-green-900 dark:to-green-800">
          <MedalIcon className="h-8 w-8 text-green-600 dark:text-green-400" />
        </div>

        <div className="flex flex-1 flex-col items-start justify-between">
          <div className="flex w-full justify-between">
            <h3 className="text-lg font-bold dark:text-white">{mission.title}</h3>
            <span className="inline-flex items-center rounded-full bg-green-100 px-4 py-1 text-sm font-semibold text-green-600 dark:bg-green-900 dark:text-green-400">
              {mission.reward}
            </span>
          </div>
          <div className="flex w-full justify-between">
            <p className="mt-1 text-gray-600 dark:text-gray-300">{mission.description}</p>{' '}
            <span className="inline-flex items-center rounded-full bg-slate-100 px-4 py-1 text-sm font-semibold text-slate-600 dark:bg-slate-900 dark:text-slate-400">
              {mission.progress}/{mission.total}
            </span>
          </div>
        </div>
      </div>

      <ProgressBar
        current={mission.progress}
        total={mission.total}
      />
    </div>
  );
}
