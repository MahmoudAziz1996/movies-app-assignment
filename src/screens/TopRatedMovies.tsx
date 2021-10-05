import React, {useState, useEffect} from 'react';
import {StyleSheet, FlatList, View, ActivityIndicator} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import MovieItem from '../components/listTiles/MovieItem';
import {fetchTopRatedMovies} from '../api/movies';
import {Movie} from '../utils/models';
import {Divider} from '../components/common';
import MoveiLoader from '../components/placeholders/MoveiLoader';

const TopRatedScreen = ({navigation}: any) => {
  const [upcomingMovies, setUpcomingMovies] = useState<Movie[] | undefined>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchTopRatedMovies().then(response => {
      setLoading(false);
      if (response.ok) {
        let result = response.data?.results;
        setUpcomingMovies(result);
      } else {
        console.log(response.problem);
      }
    });
  }, []);

  return (
    <View style={styles.wrapper}>
      {loading ? (
        <MoveiLoader />
      ) : (
        <FlatList
          contentContainerStyle={{
            padding: wp(5),
            paddingTop: wp(2),
          }}
          renderItem={({item}) => (
            <MovieItem navigation={navigation} film={item} />
          )}
          data={upcomingMovies?.slice(0, 10)}
          ItemSeparatorComponent={() => <Divider height={8} />}
        />
      )}
    </View>
  );
};

export default TopRatedScreen;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#FFF',
    flex: 1,
  },
});
