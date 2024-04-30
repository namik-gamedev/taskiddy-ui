import { colors } from '../../../theme/colors';
import { Typography } from '../../typography';
import styled from '@emotion/native';
import { InputHelperTextProps } from './types';

export const InputHelperText = styled(Typography)<InputHelperTextProps>`
  margin-left: 20px;

  ${({ isError = false }) => ({
    color: isError ? colors.danger : colors.textLight,
  })}
`;
