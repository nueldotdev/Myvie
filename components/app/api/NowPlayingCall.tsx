import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, Image } from 'react-native';
import { fetchNowPlayingMovies, Movie } from '@/api/axios';
import { AppText } from '../AppText';
import { Link } from 'expo-router';
import styles from './styles';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

// {
//       "adult": false,
//       "backdrop_path": "/xlkclSE4aq7r3JsFIJRgs21zUew.jpg",
//       "genre_ids": [
//         27,
//         53
//       ],
//       "id": 1034541,
//       "original_language": "en",
//       "original_title": "Terrifier 3",
//       "overview": "Five years after surviving Art the Clown's Halloween massacre, Sienna and Jonathan are still struggling to rebuild their shattered lives. As the holiday season approaches, they try to embrace the Christmas spirit and leave the horrors of the past behind. But just when they think they're safe, Art returns, determined to turn their holiday cheer into a new nightmare. The festive season quickly unravels as Art unleashes his twisted brand of terror, proving that no holiday is safe.",
//       "popularity": 6336.348,
//       "poster_path": "/63xYQj1BwRFielxsBDXvHIJyXVm.jpg",
//       "release_date": "2024-10-09",
//       "title": "Terrifier 3",
//       "video": false,
//       "vote_average": 7.3,
//       "vote_count": 509
//     }

export default function NowPlayingMovies({title, list}:{title: string, list: Movie[]}) {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadMovies = async () => {
      try {
        setMovies(list);
      } catch (err) {
        setError('Failed to load movies');
      } finally {
        setLoading(false);
      }
    };

    loadMovies();
  }, []);

  const featuredMovies = list
  console.log(list)

  if (loading) return <ActivityIndicator size="large" color="#0000ff" />;
  if (error) return <Text style={styles.errorText}>{error}</Text>;

  return (
    <View style={styles.container}>
      <View style={styles.listHead}>
        <AppText style={styles.title}>{title}</AppText>
        <Link href='/app/saves'>
          <AppText style={styles.link}>See All</AppText>
        </Link>
      </View>
      <FlatList
        data={featuredMovies}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.movieItem}>
            <Image source={{ uri: `${IMAGE_BASE_URL}${item.poster_path}` }} style={{ width: 150, height: 200, borderRadius: 10 }} />
            
            <View style={styles.movieCont}>
              <AppText style={styles.movieTitle} numberOfLines={1} // Limits to 1 line
              ellipsizeMode='clip'>{item.title}</AppText>
              <AppText style={styles.moviesub}>{item.release_date}</AppText>
              {/* <AppText >
                <
              </AppText> */}
              <View style={styles.ratingCont}>
                <AppText style={styles.rating}>{Math.round(item.vote_average)}</AppText>
                <AppText style={styles.ratingOvr}>/</AppText>
                <AppText style={styles.ratingOvr}>10</AppText>
              </View>
            </View>
          </View>
        )}
        style={{paddingLeft: 20}}
      />
    </View>
  );
}