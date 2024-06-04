import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const PostCards = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Job Matches Your Interest</Text>
      <View style={styles.cardContainer}>
        <View style={styles.card}></View>
        <View style={styles.card}></View>
      </View>
    </View>
  );
};

export default PostCards;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    paddingHorizontal: 18,
    backgroundColor: 'rgba(255,179,138,0.2)',
  },
  headingText: {
    fontWeight: '700',
    color: 'black',
    fontSize: 15,
  },
  cardContainer: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 12,
    gap: 14,
  },
  card: {
    height: 100,
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 4,
  },
});
