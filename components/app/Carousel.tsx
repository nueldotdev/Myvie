import { fetchNowPlayingMovies, Movie } from '@/api/axios';
import React, { useEffect, useState } from 'react';
import { View, Text, Dimensions, StyleSheet, ImageBackground, Platform, Animated } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { AppText } from './AppText';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';
const { width: screenWidth } = Dimensions.get('window');

const CarouselObj = ({list}:{list: Movie[]}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const fadeAnim = React.useRef(new Animated.Value(1)).current;

  // Fade transition effect for web
  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 400,
      useNativeDriver: true,
    }).start();
  };

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 400,
      useNativeDriver: true,
    }).start();
  };

  // Auto-advance for web testing with fade transition
  useEffect(() => {
    if (Platform.OS === 'web') {
      const timer = setInterval(() => {
        fadeOut();
        setTimeout(() => {
          setCurrentIndex((prevIndex) => 
            prevIndex === list.length - 1 ? 0 : prevIndex + 1
          );
          fadeIn();
        }, 400);
      }, 3000);

      return () => clearInterval(timer);
    }
  }, [list.length]);

  useEffect(() => {
    const loadMovies = async () => {
      try {
        const data = await fetchNowPlayingMovies();
        setLoading(false);
      } catch (err) {
        setError('Failed to load movies');
        setLoading(false);
      }
    };

    loadMovies();
  }, []);

  // Web fallback carousel with fade transition
  if (Platform.OS === 'web') {
    return (
      <View style={styles.container}>
        <Animated.View 
          style={[
            styles.carouselItem,
            { opacity: fadeAnim }
          ]}
        >
          <ImageBackground
            source={{ uri: `${IMAGE_BASE_URL}${list[currentIndex]?.backdrop_path}` }}
            style={styles.carouselImage}
            resizeMode="cover"
          >
            <View style={styles.overlay}>
              <AppText style={styles.movieTitle}>{list[currentIndex]?.title}</AppText>
            </View>
          </ImageBackground>
        </Animated.View>
        <View style={styles.pagination}>
          {list.map((_, index) => (
            <View
              key={index}
              style={[
                styles.paginationDot,
                index === currentIndex && styles.paginationDotActive,
              ]}
            />
          ))}
        </View>
      </View>
    );
  }

  // Mobile carousel (unchanged)
  return (
    <View style={styles.container}>
      <Carousel
        loop={true}
        width={screenWidth}
        height={400}
        autoPlay={true}
        data={list}
        scrollAnimationDuration={1000}
        autoPlayInterval={3000}
        mode="horizontal-stack"
        modeConfig={{
          snapDirection: 'left',
          stackInterval: 18,
          scaleInterval: 0.08,
          rotateZDeg: 8,
        }}
        defaultIndex={0}
        enabled={true}
        onProgressChange={(offsetProgress) => {
          setCurrentIndex(Math.round(offsetProgress));
        }}
        renderItem={({ item, index }) => (
          <View style={styles.carouselItem} key={index}>
            <ImageBackground
              source={{ uri: `${IMAGE_BASE_URL}${item.backdrop_path}` }}
              style={styles.carouselImage}
              resizeMode="cover"
            >
              <View style={styles.overlay}>
                <AppText style={styles.movieTitle}>{item.title}</AppText>
              </View>
            </ImageBackground>
          </View>
        )}
      />
      <View style={styles.pagination}>
        {list.map((_, index) => (
          <View
            key={index}
            style={[
              styles.paginationDot,
              index === currentIndex && styles.paginationDotActive,
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 450,
  },
  carouselItem: {
    flex: 1,
    // borderRadius: 8,
    overflow: 'hidden',
    // backgroundColor: '#fff',
    // margin: 5,
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,
    // elevation: 5,
  },
  carouselImage: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    justifyContent: 'flex-end',
    padding: 40,
  },
  movieTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    textAlign: 'center'
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#cccccc25',
    marginHorizontal: 4,
  },
  paginationDotActive: {
    backgroundColor: '#FFD700',
    width: 8,
    height: 8,
    borderRadius: 6,
  },
});

export default CarouselObj;