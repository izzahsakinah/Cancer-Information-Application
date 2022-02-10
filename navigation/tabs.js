import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../components/Home';
import Note from '../components/Note';
import Quiz from '../components/Quiz';
import Profile from '../components/Profile';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        style: styles.tabBarIcon,
        backgroundColor: colors.orchid,
        activeTintColor: colors.darkGray,
        inactiveTintColor: colors.black,
        tabBarShowLabel: false,
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: () => <Image style={styles.Image} source={home} />,
        }}
      />
      <Tab.Screen
        name="Note"
        component={Note}
        icons
        options={{
          tabBarIcon: () => <Image style={styles.Image} source={note} />,
        }}
      />
      <Tab.Screen
        name="Quiz"
        component={Quiz}
        options={{
          tabBarIcon: () => <Image style={styles.Image} source={brain} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: () => <Image style={styles.Image} source={user} />,
        }}
      />

    </Tab.Navigator>
  );
};
};

export default Tabs;
