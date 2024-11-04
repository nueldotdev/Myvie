import { View, Text } from 'react-native'
import React from 'react'
import { AppText } from '@/components/app/AppText'
import { allStyles } from '@/styles/stylesheet'

const ProfilePage = () => {
  return (
    <View style={allStyles.contained}>
      <AppText style={{color: '#fff'}}>ProfilePage</AppText>
    </View>
  )
}

export default ProfilePage