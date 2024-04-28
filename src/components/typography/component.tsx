import styled from '@emotion/native';
import { textVariants } from '../../theme/text-variants';
import { TypographyProps } from './types';

export const Typography = styled.Text<TypographyProps>`
  font-family: Poppins;

  ${({ variant = 'body', color = 'black' }) => {
    return { ...textVariants[variant], color };
  }}
`;
