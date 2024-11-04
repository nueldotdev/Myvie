import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { AppText } from '@/components/app/AppText';
import { allStyles } from '@/styles/stylesheet';
import { Link } from 'expo-router';
import NowPlayingMovies from '@/components/app/api/NowPlayingCall';
import Logo from '@/components/app/Logo';
import { fetchNowPlayingMovies, fetchTopRatedMovies, Movie, fetchPopularMovies, fetchUpcomingMovies } from '@/api/axios';
import { toLinearSpace } from 'react-native-reanimated/lib/typescript/reanimated2/Colors';
import CarouselObj from '@/components/app/Carousel';


const HomePage = () => {
  const [nowPList, setNowPList] = useState<Movie[]>([]);
  const [topRList, setTopRList] = useState<Movie[]>([]);
  const [popularList, setPopularList] = useState<Movie[]>([]);
  const [upcomingList, setUpcomingList] = useState<Movie[]>([]);


  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);


  useEffect(() => {
    const loadMovies = async () => {
      try {
        const data = await fetchNowPlayingMovies();
        setNowPList(data);
        const topr = await fetchTopRatedMovies();
        setTopRList(topr);
        const popular = await fetchPopularMovies()
        setPopularList(popular)
        const upcoming = await fetchUpcomingMovies()
        setUpcomingList(upcoming)
      } catch (err) {
        setError('Failed to load movies');
      } finally {
        setLoading(false);
      }
    };

    loadMovies();
  }, []);

  return (
    <>
      <View
        style={styles.header}
      >
        <Logo style={{width: 70, height: 50}} />
      </View>
      <ScrollView style={styles.container}>
        <View style={styles.carousel}>
          <CarouselObj list={nowPList.slice(0, 5)} />
        </View>
        <View style={styles.contentContainer}>
          <NowPlayingMovies title="Now Playing" list={nowPList.slice(7, 12)} />
          <NowPlayingMovies title="Popular" list={popularList.slice(5, 10)} />
          <NowPlayingMovies title="Upcoming" list={upcomingList.slice(15, 20)} />
          <NowPlayingMovies title="Top Rated" list={topRList.slice(2, 7)} />
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Takes full screen height
    backgroundColor: '#000', // Example background color for the home page
  },
  contentContainer: {
    flexGrow: 1, // Allows ScrollView content to expand as needed
    paddingBottom: 70
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
    borderWidth: 1,
    borderBottomColor: '#FFD70051'
  },
  carousel: {
    // height: 500,
    // flex: 1
  }
});
export default HomePage;

function setMovies(list: any) {
  throw new Error('Function not implemented.');
}
