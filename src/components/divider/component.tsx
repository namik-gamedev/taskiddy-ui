import styled from 'styled-components/native';
import React, { FC } from 'react';
import { colors } from '../../theme/colors';
import { Typography } from '../typography';
import { DividerProps } from './types';
import { StyleProp, ViewStyle } from 'react-native';

export const Divider: FC<DividerProps> = ({ children, paddings }) => {
  const getStyle = (): StyleProp<ViewStyle> => {
    if (Array.isArray(paddings)) {
      return {
        paddingTop: paddings[0],
        paddingBottom: paddings[1] || paddings[0],
      };
    }
    return { paddingVertical: paddings };
  };

  return (
    <Container style={getStyle()}>
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
