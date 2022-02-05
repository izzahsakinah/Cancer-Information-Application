import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, Image, View, Text} from 'react-native';
import 'react-native-gesture-handler';
import Home from './components/Home';
import Note from './components/Note';
//import Splash from './components/Splash';
//import Register from './components/Register';
//import Login from './components/Login';
import Details from './components/Details';
import DetailsNano from './components/DetailsNano';
import Nanoparticles from './components/Nanoparticles';
import DetailsMed from './components/DetailsMed';
import Profile from './components/Profile';
import About from './components/About';
import Logout from './components/Logout';
import Quiz from './components/Quiz';
import QuizIntro from './components/QuizIntro';
import QuizNano from './components/QuizNano';
import QuizMed from './components/QuizMed';
import colors from './assets/colors/colors';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

Entypo.loadFont();
Feather.loadFont();
MaterialCommunityIcons.loadFont();

const SplashStack = createNativeStackNavigator();
const RegisterStack = createNativeStackNavigator();
const LoginStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();
const AboutStack = createNativeStackNavigator();
const DetailsStack = createNativeStackNavigator();
const DetailsNanoStack = createNativeStackNavigator();
const NanoparticlesStack = createNativeStackNavigator();
const DetailsMedStack = createNativeStackNavigator();
const QuizIntroStack = createNativeStackNavigator();
const QuizNanoStack = createNativeStackNavigator();
const QuizMedStack = createNativeStackNavigator();
const TabNavigatorStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const HomeStack = ({navigation}) => {
  return (
    <SplashStack.Navigator>
        {/*<Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown : false,
          }}
        /> */}
     </SplashStack.Navigator>
  )
}

const RegisterStack = ({navigation}) => {
  return (
    <RegisterStack.Navigator>
          {/*<Stack.Screen
          name="Register"
          component={Register}
          options={{headerShown : false,
          }}
        />*/}
     </RegisterStack.Navigator>
  )
}

const LoginStack = ({navigation}) => {
  return (
    <LoginStack.Navigator>
        {/*<Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown : false,
          }}
        />*/}
     </LoginStack.Navigator>
  )
}

const TabNavigatorStack = ({navigation}) => {
  return (
    <TabNavigatorStack.Navigator>
       <Stack.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={{headerShown: false}}
        />
     </TabNavigatorStack.Navigator>
  )
}

const HomeStack = ({navigation}) => {
  return (
    <HomeStack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            headerLeft: () => (
              <Entypo.Button name="menu" size={25} onPress={() => navigation.openDrawer()}></Entypo.Button>
            )
          }}
          //options={{title: 'My home'}}
        />
     </HomeStack.Navigator>
  )
}

const AboutStack = ({navigation}) => {
  return (
    <AboutStack.Navigator>
        <Stack.Screen
          name="About"
          component={About}
          options={{headerShown: false}}
        />
     </AboutStack.Navigator>
  )
}

const DetailsStack = ({navigation}) => {
  return (
    <DetailsStack.Navigator>
       <Stack.Screen
          name="Details"
          component={Details}
          options={{headerShown: false}}
        />
     </DetailsStack.Navigator>
  )
}

const DetailsNanoStack = ({navigation}) => {
  return (
    <DetailsNanoStack.Navigator>
       <Stack.Screen
          name="DetailsNano"
          component={DetailsNano}
          options={{headerShown: false}}
        />
     </DetailsNanoStack.Navigator>
  )
}

const NanoparticlesStack = ({navigation}) => {
  return (
    <NanoparticlesStack.Navigator>
        {/*<Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown : false,
          }}
        /> */}
     </NanoparticlesStack.Navigator>
  )
}

const DetailsMedStack = ({navigation}) => {
  return (
    <DetailsMedStack.Navigator>
       <Stack.Screen
          name="DetailsMed"
          component={DetailsMed}
          options={{headerShown: false}}
        />
     </DetailsMedStack.Navigator>
  )
}

const QuizIntroStack = ({navigation}) => {
  return (
    <QuizIntroStack.Navigator>
         <Stack.Screen
          name="QuizIntro"
          component={QuizIntro}
          options={{headerShown: false}}
        />
     </QuizIntroStack.Navigator>
  )
}

const QuizNanoStack = ({navigation}) => {
  return (
    <QuizNanoStack.Navigator>
        <Stack.Screen
          name="QuizNano"
          component={QuizNano}
          options={{headerShown: false}}
        />
     </QuizNanoStack.Navigator>
  )
}

const QuizMedStack = ({navigation}) => {
  return (
    <QuizMedStack.Navigator>
        <Stack.Screen
          name="QuizMed"
          component={QuizMed}
          options={{headerShown: false}}
        />
     </QuizMedStack.Navigator>
  )
}



const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#0b2c54',
        tabBarInactiveTintColor: '#9e9e9e',
        // tabBarShowLabel: false,
        // headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: 'MyNanoria',
          headerStyle: {
            backgroundColor: '#0b2c54',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'normal',
          },
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="home-variant"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Note"
        component={Note}
        options={{
          title: 'MyNanoria',
          headerStyle: {
            backgroundColor: '#0b2c54',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'normal',
          },
          tabBarLabel: 'Note',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="note-text" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Quiz"
        component={Quiz}
        options={{
          title: 'MyNanoria',
          headerStyle: {
            backgroundColor: '#0b2c54',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'normal',
          },
          tabBarLabel: 'Quiz',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="brain" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          title: 'MyNanoria',
          headerStyle: {
            backgroundColor: '#0b2c54',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'normal',
          },
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => (
            <MaterialIcons name="contact-page" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="About" component={AboutStack}/>
        <Drawer.Screen name="Logout" component={Logout}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  tabBarIcon: {
    backgroundColor: colors.orchid,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  Image: {
    width: 20,
    height: 20,
  },
});

export default App;
