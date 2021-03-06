import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export interface Props {
  width?: number;
  height: number;
  color?: string;
  margin?: number;
}

const Divider: React.FC<Props> = ({width, height, color, margin}) => {
  return (
    <View
      style={{
        width: width || '100%',
        height,
        backgroundColor: color || 'transparent',
        alignSelf: 'center',
        marginVertical: margin || 0,
      }}
    />
  );
};

export default Divider;
