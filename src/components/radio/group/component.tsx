import { Children, ReactElement, cloneElement, isValidElement } from 'react';
import React from 'react-native';
import styled from 'styled-components/native';
import { RadioButton, RadioButtonProps } from '../button';
import { RadioGroupProps } from './types';

export const RadioGroup = <T extends unknown>({
  children,
  onChange,
  value,
  ...props
}: RadioGroupProps<T>) => {
  const clonedChildren = Children.map(children, (c) => {
    let child = Object.assign({}, c);
    if (isValidElement<RadioButtonProps>(child) && child.type === RadioButton) {
      child = child as ReactElement<RadioButtonProps<T>>;

      const onPress = () => {
        onChange(child.props.value);
      };

      return cloneElement<Pick<RadioButtonProps, 'onPress' | 'active'>>(child, {
        ...child.props,
        active: child.props.value === value,
        onPress,
      });
    }
    return child;
  });
  return <RadioGroupStyled {...props}>{clonedChildren}</RadioGroupStyled>;
};

const RadioGroupStyled = styled.View`
  row-gap: 12px;
  margin: 2px 0;
`;
