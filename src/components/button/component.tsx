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
  ...props
}) => {
  return (
    <StyledButton disabled={disabled || loading} {...props}>
      {loading ? (
        <ActivityIndicator color={colors.primary} />
      ) : (
        <ButtonTitle inactive={disabled!}>{title}</ButtonTitle>
      )}
    </StyledButton>
  );
};

const StyledButton = styled.Pressable<ButtonProps>`
  background: ${({ disabled }) =>
    disabled ? colors.textLighter : colors.primary};
  flex-direction: row;
  justify-content: center;
  border-radius: 12px;
  padding: 16px 25px;
`;
