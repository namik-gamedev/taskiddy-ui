import { ReactElement } from 'react';
import { ViewProps } from 'react-native';
import { RadioButtonProps } from '../button';

export type RadioGroupProps<T extends unknown> = ViewProps & {
  value: T;
  onChange: (value: T) => void;
  children?: ReactElement<unknown & RadioButtonProps>;
};
