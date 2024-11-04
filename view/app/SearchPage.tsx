import { View, Text } from 'react-native'
import React from 'react'
import { AppText } from '@/components/app/AppText'
import { allStyles } from '@/styles/stylesheet'

const SearchPage = () => {
  return (
    <View style={allStyles.contained}>
      <AppText style={{color: '#ffffff'}}>SearchPage</AppText>
    </View>
  )
}

export default SearchPage