import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import CreatePost from '../screens/CreatePost';
import Icon from 'react-native-vector-icons/FontAwesome5';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const TabNavigation = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 0,
          right: 0,
          left: 0,
          elevation: 0,
          height: 60,
          backgroundColor: '#fff',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => {
            return (
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Icon
                  name="home"
                  size={24}
                  color={focused ? '#F94327' : '#111'}
                />
                <Text
                  style={{
                    fontSize: 12,
                    color: `${focused ? '#F94327' : '#111'}`,
                  }}>
                  HOME
                </Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Create Post"
        component={CreatePost}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <MaterialIcon
                  name="add-circle-outline"
                  size={24}
                  color={focused ? '#F94327' : '#111'}
                />
                <Text
                  style={{
                    fontSize: 12,
                    color: `${focused ? '#F94327' : '#111'}`,
                  }}>
                  Add Post
                </Text>
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({});
