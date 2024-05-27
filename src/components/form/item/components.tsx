import React, { Children, cloneElement, isValidElement } from 'react';
import { FormItemProps } from './types';
import { FormLabel } from '../label';
import { FormHelperText } from '../helper-text/component';
import styled from 'styled-components/native';

export const FormItem = ({
  children,
  label,
  helperText,
  isError,
  disabled,
}: FormItemProps) => {
  const clonedChildren = Children.map(children, (child) => {
    if (isValidElement(child)) {
      return cloneElement<{ isError?: boolean; disabled?: boolean }>(child, {
        isError,
        disabled,
      });
    }
    return child;
  });

  return (
    <StyledFormItem>
      {label && <FormLabel>{label}</FormLabel>}
      {clonedChildren}
      {helperText && (
        <FormHelperText variant="body2" isError={isError}>
          {helperText}
        </FormHelperText>
      )}
    </StyledFormItem>
  );
};

const StyledFormItem = styled.View`
  row-gap: 4px;
`;
