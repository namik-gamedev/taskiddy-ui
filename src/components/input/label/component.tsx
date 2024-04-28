import { Typography, TypographyProps } from '../../typography';
import styled from '@emotion/native';
import { colors } from '../../../theme/colors';
import { spacing } from '../../../theme/spacing';

export type InputLabelProps = TypographyProps & {
  isError?: boolean;
};

export const InputLabel = styled(Typography)<InputLabelProps>`
  margin-left: ${spacing[5]};

  ${({ isError = false }) => ({
    color: isError ? colors.danger : colors.textLight,
  })}
`;
