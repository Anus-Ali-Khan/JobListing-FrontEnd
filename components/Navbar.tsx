import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

const Navbar = () => {
  return (
    <View style={[styles.container]}>
      <Image source={require('./assets/logo.png')} style={styles.image} />
      <View>
        <TextInput
          style={styles.input}
          placeholder="Search job according to your skills"
        />
        <FontAwesomeIcon name="search" />
      </View>
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'coral',
    flex: 1,
    height: 150,
    justifyContent: 'flex-end',
  },
  headingText: {
    color: '#FFFFFF',
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: '#FFFFFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 6,
    marginBottom: -1,
  },
  image: {
    height: 70,
    width: 80,
    alignItems: 'center',
    borderRadius: 6,
  },
});
