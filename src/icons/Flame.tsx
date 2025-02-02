import {IconProps} from '@/types/IconsType';
import {dimensions} from '@/icons/Dimensions';

export default function FlameIcon({
  size = 'md',
  fill = 'none',
  color = 'currentColor',
  className = '',
  strokeWidth = 1.5,
  ...props
}: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={fill}
      stroke={color}
      strokeWidth={strokeWidth}
      className={`${dimensions[size]} ${className}`}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}>
      <path d="M15.362 5.214A8.252 8.252 0 0 1 12 21A8.25 8.25 0 0 1 6.038 7.047A8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867a8.21 8.21 0 0 0 3 2.48" />
      <path d="M12 18a3.75 3.75 0 0 0 .495-7.468a5.99 5.99 0 0 0-1.925 3.547a5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18" />
    </svg>
  );
}
