import { StyleSheet, Image, Text, View } from 'react-native';
import { router } from 'expo-router';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
  withSequence,
  withDelay,
} from 'react-native-reanimated';
import { useEffect, useState } from 'react';

export default function Index() {
  const rotateAnimation = useSharedValue(0); // For loader spin
  const scaleAnimation = useSharedValue(1);  // For logo scale effect
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    // Step 1: Spin the loader image
    rotateAnimation.value = withRepeat(
      withTiming(360, { duration: 1000 }), // Full rotation over 1 second
      -1, // Infinite repeat until stopped
      false
    );

    // Step 2: Set timeout to hide loader and show logo after a delay
    setTimeout(() => {
      setShowLoader(false); // Hide loader
      startLogoAnimation();  // Trigger logo animation
      rotateAnimation.value = 0;
    }, 3000); // 3-second delay before switching to logo


    setTimeout(() => {
      router.replace('/auth')
    }, 7000);
  }, []);

  const startLogoAnimation = () => {
    // Run scale animation for the logo after loader completes
    scaleAnimation.value = withDelay(
      100, 
      withRepeat(
        withSequence(
          withTiming(0.7, { duration: 500 }), 
          withTiming(1, { duration: 500 })
        ),
        // infiniy
        -1
      )
    );
  };

  const loaderAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotateAnimation.value}deg` }],
  }));

  // Styles for scaling the logo
  const logoAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scaleAnimation.value }],
  }));

  return (
    <View style={styles.contained}>
       {showLoader ? (
        <Animated.Image
          source={require("../assets/images/loadss.png")} // Loader image source
          style={loaderAnimatedStyle}      // Apply loader rotation style
        />
      ) : (
        <Animated.Image
          source={require("../assets/images/myvie.png")} // Logo image source
          style={logoAnimatedStyle}     // Apply logo scale style
        />  
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 100,
  },
  contained: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
    backgroundColor: "#000000",
  },
});
