import React from 'react';
import { Text, TextProps } from 'react-native';

export function AppText(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: 'Poppins' }]} />;
}
