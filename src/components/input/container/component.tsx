import styled from 'styled-components/native';
import { InputContainerProps } from './types';
import { rgba } from 'polished';
import { colors } from '../../../theme';

export const InputContainer = styled.View<InputContainerProps>`
  background-color: ${({ isError }) =>
    isError ? rgba(colors.danger, 0.1) : colors.textLighter};
  border-radius: 12px;
  flex-direction: row;
  height: 48px;
  padding: 0 20px;
  column-gap: 12px;
`;
