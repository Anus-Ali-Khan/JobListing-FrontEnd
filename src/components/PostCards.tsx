import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import ApiService from '../apiService';

const PostCards = () => {
  const [posts, setPosts] = useState([]);

  const getJobPosts = async () => {
    const api = new ApiService();
    const data = await api.get('/posts');
    setPosts(data);
  };

  console.log(posts);

  useEffect(() => {
    getJobPosts();
  }, []);

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
