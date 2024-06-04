import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import Navbar from './src/components/Navbar';
import PostCards from './src/components/PostCards';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Navbar />
        <PostCards />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'coral',
  },
});
