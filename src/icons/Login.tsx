import {IconProps} from '@/types/IconsType';
import {dimensions} from '@/icons/Dimensions';

export default function LoginIcon({
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
      <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4m-5-4l5-5l-5-5m5 5H3" />
    </svg>
  );
}
