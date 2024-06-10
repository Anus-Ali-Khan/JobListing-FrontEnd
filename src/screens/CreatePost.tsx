import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import ReactHookForm from '../components/ReactHookForm';

const CreatePost = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <ReactHookForm />
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreatePost;

const styles = StyleSheet.create({});
