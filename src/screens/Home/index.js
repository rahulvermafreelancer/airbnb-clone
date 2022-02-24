/* eslint-disable prettier/prettier */
import React from 'react';
import {View, ImageBackground, Text, Pressable} from 'react-native';
import styles from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto';

const Home = props => {
  return (
    <View>
      <ImageBackground
        source={require('../../../assets/images/11.jpg')}
        style={styles.image}>
        <Pressable style={styles.searchButton}>
          <Fontisto name="search" size={25} color={'#f15454'} />
          <Text style={styles.searchButtonText}>Where are you going?</Text>
        </Pressable>
        <Text style={styles.title}>Go Near</Text>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Explore nearby stays</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

export default Home;
