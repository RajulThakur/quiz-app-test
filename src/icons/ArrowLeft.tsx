import {IconProps} from '@/types/IconsType';
import {dimensions} from '@/icons/Dimensions';

export default function ArrowLeftIcon({
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
      fill={fill}
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${dimensions[size]} ${className}`}
      {...props}>
      <path d="M19 12H5m4 4l-4-4m4-4l-4 4" />
    </svg>
  );
}
