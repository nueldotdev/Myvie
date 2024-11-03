import { Text, View, Image, ImageBackground, Pressable } from 'react-native'
import React from 'react'
import { router } from 'expo-router';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { authStyles } from '@/styles/stylesheet'
import Logo from '@/components/app/Logo';
import { AppText } from '@/components/app/AppText';

const Index = () => {
  const colorScheme = useColorScheme();

  return (
    <View style={authStyles.container}>
      <ImageBackground
        source={require('../../assets/images/auth/last.jpg')}
        style={authStyles.authBgImg}
        imageStyle={authStyles.imageStyle}
      >
        <View style={authStyles.overlay} />
        <View style={authStyles.content}>
          {/* <Image source={require('../../assets/images/myvie.png')} /> */}
          <Logo style={{width: 150, height: 200}}/>
          <AppText style={authStyles.text}>Movies that Move You</AppText>
          <View style={authStyles.buttonSect}>
            <Pressable onPress={() => router.push('/auth/register')} style={[authStyles.button, authStyles.regBtn]}>
              <AppText style={authStyles.buttonText}>Register</AppText>
            </Pressable>
            <Pressable onPress={() => router.push('/auth/login')} style={[authStyles.button, authStyles.loginBtn]}>
              <AppText style={[authStyles.buttonText, authStyles.loginBtnText]}>I already have an account</AppText>
            </Pressable>
          </View>
        </View>
      </ImageBackground>
      <View style={authStyles.end} />
    </View>
  )
}

export default Index
