import { colors } from '../../../theme/colors';
import { spacing } from '../../../theme/spacing';
import { Typography, TypographyProps } from '../../typography';
import styled from '@emotion/native';

export type InputHelperTextProps = TypographyProps & {
  isError?: boolean;
};

export const InputHelperText = styled(Typography)<InputHelperTextProps>`
  margin-left: ${spacing[5]};

  ${({ isError = false }) => ({
    color: isError ? colors.danger : colors.textLight,
  })}
`;
