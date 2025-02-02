import {SVGProps} from 'react';

export type DimensionKey = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface IconProps extends SVGProps<SVGSVGElement> {
  size?: DimensionKey;
  strokeWidth?: number;
  fill?: string;
  color?: string;
  className?: string;
}
