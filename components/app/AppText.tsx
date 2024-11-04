import React from 'react';
import { Text, TextProps, StyleSheet } from 'react-native';

interface AppTextProps extends TextProps {
  children: React.ReactNode;
}

export function AppText({ style, children, ...otherProps }: AppTextProps) {
  return (
    <Text
      {...otherProps}
      style={[styles.defaultStyle, style]} // Apply custom font styling and merge with any additional styles
    >
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  defaultStyle: {
    fontFamily: 'Poppins', // Set default font family
  },
});
