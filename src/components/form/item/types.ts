import { ReactElement } from 'react';
import { ViewProps } from 'react-native';

export type FormItemProps<
  ChildProps = unknown & { isError?: boolean; disabled?: boolean },
> = Omit<ViewProps, 'children'> & {
  label?: string;
  required?: boolean;
  helperText?: string;
  isError?: boolean;
  disabled?: boolean;
  children?: ReactElement<ChildProps> | ReactElement<ChildProps>[];
};
