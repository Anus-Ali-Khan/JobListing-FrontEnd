import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const Navbar = () => {
  return (
    <View style={[styles.container]}>
      <Image source={require('../assets/logo.png')} style={styles.image} />
      <View style={styles.inputContainer}>
        <Icon name="search" size={16} color="#808080" />
        <TextInput
          style={styles.input}
          placeholder="Search job according to your skills"
        />
      </View>
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'coral',
    flex: 1,
    height: 160,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  headingText: {
    color: '#FFFFFF',
  },

  input: {
    height: 40,
    width: '80%',
  },
  image: {
    height: 70,
    width: 80,
    borderRadius: 6,
  },
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderColor: '#FFFFFF',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 6,
    gap: 2,
    paddingHorizontal: 8,
  },
});
