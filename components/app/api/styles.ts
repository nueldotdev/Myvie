import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingHorizontal: 10,
    width: '100%',
    // alignItems: 'center',
    justifyContent: 'center',
    // borderWidth: 2,
    // borderColor: 'red'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "white"
  },
  errorText: {
    color: 'red',
    fontSize: 16,
  },
  movieItem: {
    marginRight: 20,
    // flexDirection: 'row',
    rowGap: 10,
  },
  movieTitle: {
    fontSize: 14,
    color: 'white',
    fontWeight: '500',
  },
  moviesub: {
    fontSize: 12,
    color: '#ccc',
    fontWeight: '400',
  },
  movieCont: {
    width: '100%',
  },

  link: {
    fontSize: 14,
    color: '#6E6E6E',

  },

  listHead: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%'
  },

  rating: {
    // color: '#F4F4F4',
    color: '#FFD700',
  },

  ratingOvr: {
    color: '#6D6D6D'
  },

  ratingCont: {
    flexDirection: 'row',
    marginTop: 2
  }
});


export default styles;