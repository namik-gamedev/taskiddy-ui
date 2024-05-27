import React from 'react';
import { ViewProps } from 'react-native';
import styled from 'styled-components/native';
import { FormHelperText } from './helper-text/component';
import { FormItem } from './item/components';
import { FormLabel } from './label/component';

export const Form = ({ ...props }: ViewProps) => {
  return <StyledForm {...props} />;
};

const StyledForm = styled.View`
  row-gap: 8px;
`;

Form.helperText = FormHelperText;

Form.Label = FormLabel;

Form.Item = FormItem;
