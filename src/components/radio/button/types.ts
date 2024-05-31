import { PressableProps } from 'react-native';

export type RadioButtonProps<T = unknown> = PressableProps & {
  active?: boolean;
  value: T;
  label: string;
  disabled?: boolean;
};
