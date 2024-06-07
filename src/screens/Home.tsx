import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import Navbar from '../components/Navbar';
import PostCards from '../components/PostCards';

const Home = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Navbar />
        <PostCards />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
