import {IconProps} from '@/types/IconsType';
import {dimensions} from '@/icons/Dimensions';

export default function AwardIcon({
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
      <circle
        cx="12"
        cy="8"
        r="6"
      />
      <path d="M15.477 12.89L17 22l-5-3l-5 3l1.523-9.11" />
    </svg>
  );
}
