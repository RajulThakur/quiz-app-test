import {IconProps} from '@/types/IconsType';
import {dimensions} from '@/icons/Dimensions';

export default function MedalIcon({
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
        d="M7.21 15L2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15M11 12L5.12 2.2M13 12l5.88-9.8M8 7h8"
      />
      <circle
        cx="12"
        cy="17"
        r="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 18v-2h-.5"
      />
    </svg>
  );
}
