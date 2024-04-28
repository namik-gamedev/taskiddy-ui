import { FC } from 'react';
import { TextInputProps } from 'react-native';

export type AdornmentProps = {
  isError: boolean;
};

export type InputProps = TextInputProps & {
  label?: string;
  LeftAdornment?: FC<AdornmentProps>;
  RightAdornment?: FC<AdornmentProps>;
  helperText?: string;
  isError?: boolean;
};
