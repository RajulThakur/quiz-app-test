'use client';
import Brain from '@/icons/Brain';
import Target from '@/icons/Target';
import Trophy from '@/icons/Trophy';
import {TabType} from '@/types/types';
import {useRouter, usePathname} from 'next/navigation';
import {ReactNode, useState} from 'react';

export function Tab() {
  const tabs: {id: TabType; label: string; icon: ReactNode}[] = [
    {id: 'contest', label: 'Contest', icon: <Brain className="h-6 w-6" />},
    {id: 'missions', label: 'Missions', icon: <Target className="h-6 w-6" />},
    {id: 'rankings', label: 'Rankings', icon: <Trophy className="h-6 w-6" />},
  ];
  const router = useRouter();
  const tabValue = usePathname().split('/')[2];
  const [activeTab, setActiveTab] = useState<TabType>((tabValue as TabType) || 'contest');
  return (
    <div className="flex justify-evenly space-x-0 rounded-xl bg-white/20 p-1 shadow-lg backdrop-blur-lg dark:bg-gray-800/20 sm:space-x-1 sm:p-1.5">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => {
            setActiveTab(tab.id);
            router.push(`/menu/${tab.id}`);
          }}
          className={` ${
            tab.id === activeTab
              ? 'scale-105 bg-white text-blue-600 shadow-md dark:bg-gray-800 dark:text-blue-400'
              : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200'
          } group relative flex flex-col items-center rounded-lg px-3 py-2 text-sm transition-all duration-300 sm:flex-row sm:space-x-2 sm:px-6 sm:py-3 sm:text-base`}>
          <div className="relative">
            <div className="transform transition-transform duration-300 group-hover:scale-110">
              {tab.icon}
            </div>
          </div>
          <span className="mt-1 text-xs font-medium sm:mt-0 sm:text-base">{tab.label}</span>
        </button>
      ))}
    </div>
  );
}
