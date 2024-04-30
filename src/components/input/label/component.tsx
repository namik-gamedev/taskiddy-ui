import styled from '@emotion/native';
import { colors } from '../../../theme/colors';
import { spacing } from '../../../theme/spacing';
import { Typography } from '../../typography';
import { InputLabelProps } from './types';

export const InputLabel = styled(Typography)<InputLabelProps>`
  margin-left: ${spacing[5]}px;

  ${({ isError = false }) => ({
    color: isError ? colors.danger : colors.textLight,
  })}
`;
