import {IconProps} from '@/types/IconsType';
import {dimensions} from '@/icons/Dimensions';

export default function ZapIcon({
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
        d="M13 2L3 14h9l-1 8l10-12h-9z"
      />
    </svg>
  );
}
