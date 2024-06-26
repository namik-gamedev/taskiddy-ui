import React, { FC } from 'react';
import styled from 'styled-components/native';
import { colors } from '../../theme/colors';
import { InputContainer } from './container';
import { InputProps } from './types';

export const Input: FC<InputProps> = ({
  LeftAdornment,
  RightAdornment,
  isError = false,
  ...props
}) => {
  return (
    <InputContainer isError={isError}>
      {LeftAdornment && (
        <AdornmentContainer>
          <LeftAdornment isError={isError} />
        </AdornmentContainer>
      )}
      <StyledInput
        placeholderTextColor={isError ? colors.danger : colors.textLight}
        {...props}
      />
      {RightAdornment && (
        <AdornmentContainer>
          <RightAdornment isError={isError} />
        </AdornmentContainer>
      )}
    </InputContainer>
  );
};

const AdornmentContainer = styled.View`
  height: 100%;
  justify-content: center;
`;

const StyledInput = styled.TextInput<InputProps>`
  flex: 1;
  font-family: Montserrat;
  font-weight: 500;
  padding: 0px;
`;
