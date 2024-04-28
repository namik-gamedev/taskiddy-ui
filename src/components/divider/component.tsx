import React, { FC } from 'react';
import { ViewProps } from 'react-native';
import { Typography } from '../typography';
import styled from '@emotion/native';
import { spacing } from '../../theme/spacing';
import { colors } from '../../theme/colors';

export type DividerProps = ViewProps & {
  children?: string;
};

export const Divider: FC<DividerProps> = ({ children }) => {
  return (
    <Container>
      <Line />
      {children && <Text variant="body2">{children}</Text>}
      <Line />
    </Container>
  );
};

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  padding: ${spacing[1]} 0;
`;

const Line = styled.View`
  height: 0.5;
  flex: 1;
  background-color: ${colors.textLight};
`;

const Text = styled(Typography)`
  margin: 0 ${spacing[3]};
  color: ${colors.textLight};
`;
