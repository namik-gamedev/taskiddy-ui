import styled from 'styled-components/native';
import React, { FC } from 'react';
import { colors } from '../../theme/colors';
import { InputProps } from './types';
import { InputHelperText } from './helper-text';
import { Typography } from '../typography';
import { textVariants } from '../../theme';
import { InputContainer } from './container';

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
      {label && <Label variant="link">{label}</Label>}
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

const AdornmentContainer = styled.View`
  height: 100%;
  justify-content: center;
`;

const StyledInput = styled.TextInput<InputProps>`
  flex: 1;
  font-family: Montserrat;
  font-weight: 500;
`;

const Label = styled(Typography)`
  margin-left: 15px;

  font-size: ${textVariants.body2.fontSize}px;
`;
