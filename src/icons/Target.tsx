import {IconProps} from '@/types/IconsType';
import {dimensions} from '@/icons/Dimensions';

export default function TargetIcon({
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
      <circle
        cx="12"
        cy="12"
        r="10"
      />
      <circle
        cx="12"
        cy="12"
        r="6"
      />
      <circle
        cx="12"
        cy="12"
        r="2"
      />
    </svg>
  );
}
