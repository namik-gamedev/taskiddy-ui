import React from 'react';
import { View, Text } from 'react-native';

export function multiply(a: number, b: number): Promise<number> {
  return Promise.resolve(a * b);
}

export const Button = () => {
  return (
    <View>
      <Text>sgfdsf</Text>
    </View>
  );
};
