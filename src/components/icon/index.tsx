import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React, { ComponentProps, FC } from 'react';
import { View } from 'react-native';

export type IconProps = ComponentProps<typeof FontAwesomeIcon>;

export const Icon: FC<IconProps> = ({ color = 'black', size, ...props }) => {
  return (
    <View>
      <FontAwesomeIcon color={color} size={size} {...props} />
    </View>
  );
};
