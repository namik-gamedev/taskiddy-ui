import { ReactElement } from 'react';
import { ViewProps } from 'react-native';

export type FormItemProps = Omit<ViewProps, 'children'> & {
  label?: string;
  helperText?: string;
  isError?: boolean;
  disabled?: boolean;
  children?: ReactElement<
    unknown & { isError?: boolean; disabled?: boolean }
  >[];
};
