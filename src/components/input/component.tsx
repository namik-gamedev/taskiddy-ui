import styled from 'styled-components/native';
import React, { FC } from 'react';
import { colors } from '../../theme/colors';
import { InputProps } from './types';
import { InputHelperText } from './helper-text';
import { InputLabel } from './label';

export const Input: FC<InputProps> = ({
  label,
  LeftAdornment,
  RightAdornment,
  helperText,
  isError = false,
  ...props
}) => {
  return (
    <Container>
      {label && (
        <InputLabel variant="link" isError={isError}>
          {label}
        </InputLabel>
      )}
      <InputContainer>
        {LeftAdornment && (
          <AdornmentContainer>
            <LeftAdornment isError={isError} />
          </AdornmentContainer>
        )}
        <StyledInput placeholderTextColor={colors.textLight} {...props} />
        {RightAdornment && (
          <AdornmentContainer>
            <RightAdornment isError={isError} />
          </AdornmentContainer>
        )}
      </InputContainer>
      {helperText && (
        <InputHelperText variant="body2" isError={isError}>
          {helperText}
        </InputHelperText>
      )}
    </Container>
  );
};

const Container = styled.View`
  row-gap: 4px;
`;

const InputContainer = styled.View`
  background-color: ${colors.textLighter};
  border-radius: 20px;
  flex-direction: row;
  height: 48px;
  padding: 0 20px;
  column-gap: 12px;
`;

const AdornmentContainer = styled.View`
  height: 100%;
  justify-content: center;
`;

const StyledInput = styled.TextInput<InputProps>`
  flex: 1;
  font-family: Poppins;
  font-weight: 500;

  ${({ isError }) => ({ color: isError ? colors.danger : 'black' })}
`;
