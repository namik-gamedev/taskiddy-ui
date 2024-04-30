import styled from 'styled-components/native';
import { textVariants } from '../../theme/text-variants';
import { TypographyProps } from './types';

export const Typography = styled.Text<TypographyProps>`
  font-family: Montserrat;

  ${({ variant = 'body', color = 'black' }) => {
    return { ...textVariants[variant], color };
  }}
`;
