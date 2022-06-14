import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { CSSProperties } from 'styled-components';

export type ButtonProps = {
  color?: string;
  text?: string;
  light?: boolean;
  highlightColor?: string;
  icon?: IconProp;
  onClick?: any;
  round?: boolean;
  style?: CSSProperties;
};

export type SecondaryButtonProps = {
  text?: string;
  secondary?: boolean;
  color?: string;
  icon?: IconProp;
  onClick?: any;
  style?: CSSProperties;
};
