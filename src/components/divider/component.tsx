import styled from '@emotion/native';
import React, { FC } from 'react';
import { colors } from '../../theme/colors';
import { Typography } from '../typography';
import { DividerProps } from './types';

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
  padding: 4px 0;
`;

const Line = styled.View`
  height: 0.5px;
  flex: 1;
  background-color: ${colors.textLight};
`;

const Text = styled(Typography)`
  margin: 0 12px;
  color: ${colors.textLight};
`;
