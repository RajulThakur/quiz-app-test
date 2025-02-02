import {IconProps} from '@/types/IconsType';
import {dimensions} from '@/icons/Dimensions';

export default function SunIcon({
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
      <path d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0a3.75 3.75 0 0 1 7.5 0" />
    </svg>
  );
}
