/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    // justifyContent: 'center',
  },
  title: {
    fontSize: 80,
    color: '#ffffff',
    fontWeight: 'bold',
    width: '70%',
    marginLeft: '10%',
    marginTop: '25%',
  },
  button: {
    backgroundColor: '#ffffff',
    width: '60%',
    marginLeft: '10%',
    padding: '2%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  searchButton: {
    backgroundColor: '#ffffff',
    height: 50,
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: '15%',
  },
  searchButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default styles;
