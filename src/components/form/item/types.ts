import { ReactElement } from 'react';
import { ViewProps } from 'react-native';

export type FormItemProps = ViewProps & {
  label?: string;
  helperText?: string;
  isError?: boolean;
  children: ReactElement<unknown & { isError?: boolean }>;
};
