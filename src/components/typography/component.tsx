import styled from '@emotion/native';
import { TextProps } from 'react-native';
import { textVariants } from '../../theme/text-variants';
import { TypographyVariant } from './types';

export type TypographyProps = TextProps & {
  variant?: TypographyVariant;
  color?: string;
};

export const Typography = styled.Text<TypographyProps>`
  font-family: Poppins;

  ${({ variant = 'body', color = 'black' }) => {
    return { ...textVariants[variant], color };
  }}
`;
