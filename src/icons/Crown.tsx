import {IconProps} from '@/types/IconsType';
import {dimensions} from '@/icons/Dimensions';

export default function CrownIcon({
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
      className={`${dimensions[size]} ${className}`}
      {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m2 4l3 12h14l3-12l-6 7l-4-7l-4 7zm3 16h14"
      />
    </svg>
  );
}
