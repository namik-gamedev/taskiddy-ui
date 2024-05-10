import styled from 'styled-components/native';
import { Typography } from '../../typography';
import { ButtonTitleProps } from './types';
import { colors } from '../../../theme';

export const ButtonTitle = styled(Typography)<ButtonTitleProps>`
  font-weight: 500;

  color: ${({ inactive = false }) => (inactive ? colors.textLight : 'white')};
`;
