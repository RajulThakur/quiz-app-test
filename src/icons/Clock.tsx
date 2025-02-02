import {IconProps} from '@/types/IconsType';
import {dimensions} from '@/icons/Dimensions';

export default function ClockIcon({
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
      <g
        strokeLinecap="round"
        strokeLinejoin="round">
        <circle
          cx="12"
          cy="12"
          r="10"
        />
        <path d="M12 6v6l-4-2" />
      </g>
    </svg>
  );
}
