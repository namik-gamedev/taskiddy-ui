import styled from '@emotion/native';
import React, { FC } from 'react';
import { TextInputProps } from 'react-native';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';
import { borderRadii } from '../../theme/border-radii';
import { AdornmentProps } from './types';
import { InputHelperText } from './helper-text';
import { InputLabel } from './label';

export type InputProps = TextInputProps & {
  label?: string;
  LeftAdornment?: FC<AdornmentProps>;
  RightAdornment?: FC<AdornmentProps>;
  helperText?: string;
  isError?: boolean;
};

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
  row-gap: ${spacing[1]};
`;

const InputContainer = styled.View`
  background-color: ${colors.textLighter};
  border-radius: ${borderRadii.lg};
  flex-direction: row;
  height: ${spacing[12]};
  padding: 0 ${spacing[5]};
  column-gap: ${spacing[3]};
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

export * from './helper-text';
export * from './label';
