import styled from 'styled-components/native';
import { colors } from '../../../theme/colors';
import { Typography } from '../../typography';
import { InputLabelProps } from './types';

export const InputLabel = styled(Typography)<InputLabelProps>`
  margin-left: 20px;

  ${({ isError = false }) => ({
    color: isError ? colors.danger : colors.textLight,
  })}
`;
