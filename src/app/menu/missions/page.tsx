import {MissionItem} from '@/components/MissionItem';
import {missions} from '@/data/missions';

export default function MissionPage() {
  return (
    <div className="max-h-[calc(100dvh-14rem)] space-y-6 overflow-y-auto px-6">
      {missions.map((mission) => (
        <MissionItem
          key={mission.id}
          mission={mission}
        />
      ))}
    </div>
  );
}
