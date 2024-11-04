import { View, Text } from 'react-native'
import React from 'react'
import { AppText } from '@/components/app/AppText'
import { allStyles } from '@/styles/stylesheet'

const SavedPage = () => {
  return (
    <View style={allStyles.contained}>
      <AppText style={{color: '#fff'}}>SavedPage</AppText>
    </View>
  )
}

export default SavedPage