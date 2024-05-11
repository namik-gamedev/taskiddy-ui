import { PressableProps } from 'react-native';

export type ButtonProps = PressableProps & {
  loading?: boolean;
  title?: string;
  fullWidth?: boolean;
};
