import React, { FC } from 'react';
import { ButtonProps } from './types';
import styled from 'styled-components/native';
import { colors } from '../../theme';
import { ActivityIndicator } from 'react-native';
import { ButtonTitle } from './title';

export const Button: FC<ButtonProps> = ({
  loading = false,
  disabled = false,
  title = '',
  fullWidth = false,
  Icon,
  ...props
}) => {
  return (
    <StyledButton
      fullWidth={fullWidth}
      disabled={disabled || loading}
      {...props}
    >
      {Icon}
      {loading ? (
        <ActivityIndicator color={colors.primary} />
      ) : (
        <ButtonTitle inactive={disabled!}>{title}</ButtonTitle>
      )}
    </StyledButton>
  );
};

const StyledButton = styled.TouchableOpacity<ButtonProps>`
  ${({ disabled, fullWidth }) => ({
    background: disabled ? colors.textLighter : colors.primary,
    width: fullWidth ? '100%' : 'auto',
  })};
  flex-direction: row;
  align-items: center;
  column-gap: 8px;
  justify-content: center;
  border-radius: 12px;
  padding: 16px 25px;
`;
