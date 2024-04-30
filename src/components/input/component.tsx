import styled from '@emotion/native';
import React, { FC } from 'react';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';
import { borderRadii } from '../../theme/border-radii';
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
  row-gap: ${spacing[1]}px;
`;

const InputContainer = styled.View`
  background-color: ${colors.textLighter};
  border-radius: ${borderRadii.lg}px;
  flex-direction: row;
  height: ${spacing[12]}px;
  padding: 0 ${spacing[5]}px;
  column-gap: ${spacing[3]}px;
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
