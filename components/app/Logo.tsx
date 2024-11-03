import React from 'react';
import { View, Image, ImageStyle } from 'react-native';

type LogoProps = {
  style?: ImageStyle;
};

const Logo: React.FC<LogoProps> = ({ style }) => {
  return (

    <View style={{flex: 1}}>
      <Image source={require('../../assets/images/myvie.png')}
        style={[style]}  resizeMode='contain' />
    </View>
  )
}

export default Logo;