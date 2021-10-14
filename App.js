import React from 'react';
import { StyleSheet } from 'react-native';
import Home from './components/Home';
import Details from './components/Details';
import Profile from './components/Profile';
import colors from './assets/colors/colors';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

Entypo.loadFont();
Feather.loadFont();
MaterialCommunityIcons.loadFont();

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator(); 

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{
      style: styles.tabBarIcon,
      activeTintColor: colors.orange,
      inactiveTintColor: colors.orange,
      tabBarShowLabel: false,
      headerShown: false,
    }}>
      <Tab.Screen name="Home" component={Home} options= {{
        tabBarIcon: ({ color }) => (<Entypo name= "home" size={20} color={color} />),
      }}
    />
      <Tab.Screen name="Profile" component={Profile} options= {{
        tabBarIcon: ({color}) => (<MaterialCommunityIcons name="account" size={20} color={color} />),
      }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={{headerShown : false,
          }}
          />
          <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown : false,
          }}
          />
          <Stack.Screen
          name="Details"
          component={Details}
          options={{headerShown : false,
          }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
};

const styles = StyleSheet.create ({
  tabBarIcon: { 
    backgroundColor: colors.orange,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
});


export default App;