import { colors } from '../../../theme/colors';
import { spacing } from '../../../theme/spacing';
import { Typography } from '../../typography';
import styled from '@emotion/native';
import { InputHelperTextProps } from './types';

export const InputHelperText = styled(Typography)<InputHelperTextProps>`
  margin-left: ${spacing[5]}px;

  ${({ isError = false }) => ({
    color: isError ? colors.danger : colors.textLight,
  })}
`;
