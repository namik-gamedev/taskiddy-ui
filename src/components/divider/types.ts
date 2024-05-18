import { ViewProps } from 'react-native';

export type DividerProps = ViewProps & {
  children?: string;
  /** [top, bottom] */
  paddings?: number | [number] | [number, number];
};
