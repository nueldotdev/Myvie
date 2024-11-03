import React from 'react'
import { allStyles } from '@/styles/stylesheet'
import { ArrowLeft, IconProps } from 'react-feather'
import { ButtonProps, Pressable, PressableProps } from 'react-native'
import { router } from 'expo-router';

export default function BackBtn(props: PressableProps) {
  const style = typeof props.style === 'function' ? props.style({ pressed: false }) : props.style;

  const handleBack = () => {
    // router.back();
    router.canGoBack() && router.back();
  }

  return (
    <Pressable 
      {...props}
      onPress={handleBack}
      style={[allStyles.backBtn, style]}
    >
      <ArrowLeft size={24}/>
    </Pressable>
  )
}