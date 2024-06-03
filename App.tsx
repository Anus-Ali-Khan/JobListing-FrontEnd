import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Navbar />
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
