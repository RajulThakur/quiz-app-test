import {IconProps} from '@/types/IconsType';
import {dimensions} from '@/icons/Dimensions';

export default function SparkleIcon({
  size = 'md',
  strokeWidth = 1.5,
  fill = 'none',
  color = 'currentColor',
  className = '',
  ...props
}: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth}
      fill={fill}
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${dimensions[size]} ${className}`}
      {...props}>
      <path d="m12 3l-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275zM5 3v4m14 10v4M3 5h4m10 14h4" />
    </svg>
  );
}
