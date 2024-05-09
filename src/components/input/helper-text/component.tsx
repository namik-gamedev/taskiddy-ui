import { colors } from '../../../theme/colors';
import { Typography } from '../../typography';
import styled from 'styled-components/native';
import { InputHelperTextProps } from './types';
import { textVariants } from '../../../theme';

export const InputHelperText = styled(Typography)<InputHelperTextProps>`
  margin-left: 20px;

  font-size: ${textVariants.caption.fontSize}px;

  ${({ isError = false }) => ({
    color: isError ? colors.danger : colors.textLight,
    fontWeight: 500,
  })}
`;
