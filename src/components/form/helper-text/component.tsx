import styled from 'styled-components/native';
import { Typography } from '../../typography';
import { FormHelperTextProps } from './types';
import { colors, textVariants } from '../../../theme';

export const FormHelperText = styled(Typography)<FormHelperTextProps>`
  margin-left: 20px;

  font-size: ${textVariants.caption.fontSize}px;

  ${({ isError = false }) => ({
    color: isError ? colors.danger : colors.textLight,
    fontWeight: 500,
  })}
`;
