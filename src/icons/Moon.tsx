import {IconProps} from '@/types/IconsType';
import {dimensions} from '@/icons/Dimensions';

export default function MoonIcon({
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
      <path d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75A9.75 9.75 0 0 1 8.25 6c0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25A9.75 9.75 0 0 0 12.75 21a9.753 9.753 0 0 0 9.002-5.998" />
    </svg>
  );
}
