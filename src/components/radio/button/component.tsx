import React from 'react';
import { PressableProps } from 'react-native';
import styled from 'styled-components/native';
import { colors } from '../../../theme';
import { Typography } from '../../typography';
import { RadioButtonProps } from './types';

export const RadioButton = ({
  active,
  label,
  disabled,
  ...props
}: RadioButtonProps) => {
  return (
    <RadioButtonContainer disabled={disabled} {...props}>
      <RadioButtonOuter disabled={disabled}>
        {active && <RadioButtonInner />}
      </RadioButtonOuter>
      <Typography>{label}</Typography>
    </RadioButtonContainer>
  );
};

const RadioButtonContainer = styled.Pressable<PressableProps>`
  flex-direction: row;
  column-gap: 12px;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;

const RadioButtonOuter = styled.View<{ disabled?: boolean }>`
  border-radius: 50px;
  border-width: 2px;
  border-color: ${({ disabled }) =>
    disabled ? colors.textLight : colors.primary};
  width: 20px;
  height: 20px;
  justify-content: center;
  align-items: center;
`;

const RadioButtonInner = styled.View`
  border-radius: 50px;
  width: 10px;
  height: 10px;
  background-color: ${colors.primary};
`;
