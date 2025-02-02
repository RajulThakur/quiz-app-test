import UserIcon from '@/icons/User';
import Image from 'next/image';

interface AvatarProps {
  imageUrl?: string;
  size?: number;
}

export default function Avatar({imageUrl, size = 40}: AvatarProps) {
  if (imageUrl) {
    return (
      <div className="overflow-hidden rounded-full">
        <Image
          src={imageUrl}
          alt="User avatar"
          width={size}
          height={size}
          className="h-full w-full object-cover"
        />
      </div>
    );
  }

  return (
    <div className="text-gray-600 dark:text-gray-300">
      <UserIcon size="lg" />
    </div>
  );
}
