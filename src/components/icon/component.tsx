import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React, { FC } from 'react';
import { View } from 'react-native';
import { IconProps } from './types';

export const Icon: FC<IconProps> = ({ color = 'black', size, ...props }) => {
  return (
    <View>
      <FontAwesomeIcon color={color} size={size} {...props} />
    </View>
  );
};
