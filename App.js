import React from 'react';
import { StyleSheet, Image} from 'react-native';
import 'react-native-gesture-handler';
import Home from './components/Home';
//import Splash from './components/Splash';
//import Register from './components/Register';
//import Login from './components/Login';
import Details from './components/Details';
import DetailsNano from './components/DetailsNano';
import DetailsDrugs from './components/DetailsDrugs';
import Profile from './components/Profile';
import Quiz from './components/Quiz';
import QuizIntro from './components/QuizIntro';
import QuizNano from './components/QuizNano';
import QuizDrugs from './components/QuizDrugs';
import colors from './assets/colors/colors';
import home from './assets/images/home(1).png';
import brain from './assets/images/brain.png';
import user from './assets/images/user(1).png';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

Entypo.loadFont();
Feather.loadFont();
MaterialCommunityIcons.loadFont();

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator(); 

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{
      style: styles.tabBarIcon,
      backgroundColor:  colors.orchid,
      activeTintColor: colors.darkGray,
      inactiveTintColor: colors.black,
      tabBarShowLabel: false,
      headerShown: false,
    }}>
      <Tab.Screen name="Home" component={Home} options= {{
        tabBarIcon: () => (<Image style={styles.Image} source={home} />),
      }}
      />
     <Tab.Screen name="Quiz" component={Quiz} options= {{
        tabBarIcon: () => (<Image style={styles.Image} source={brain} />),
      }}
    />
      <Tab.Screen name="Profile" component={Profile} options= {{
        tabBarIcon: () => (<Image style={styles.Image} source={user} />),
      }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator>
        {/*<Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown : false,
          }}
        /> 
        <Stack.Screen
          name="Register"
          component={Register}
          options={{headerShown : false,
          }}
        /> 
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown : false,
          }}
        />*/}
        <Stack.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={{headerShown : false,
          }}
          />
         {/*<Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown : false,
          }}
        />*/}
         {/*<Stack.Screen
          name="Details"
          component={Details}
          options={{headerShown : false,
          }}
          />
          <Stack.Screen
          name="DetailsNano"
          component={DetailsNano}
          options={{headerShown : false,
          }}
          />
          <Stack.Screen
          name="DetailsDrugs"
          component={DetailsDrugs}
          options={{headerShown : false,
          }}
        />*/}
          <Stack.Screen
          name="QuizIntro"
          component={QuizIntro}
          options={{headerShown : false,
          }}
          />
          <Stack.Screen
          name="QuizNano"
          component={QuizNano}
          options={{headerShown : false,
          }}
          />
          <Stack.Screen
          name="QuizDrugs"
          component={QuizDrugs}
          options={{headerShown : false,
          }}
        />
        </Stack.Navigator>
      </NavigationContainer>
    );
};

const styles = StyleSheet.create ({
  tabBarIcon: { 
    backgroundColor: colors.orchid,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  Image: {
    width: 20,
    height: 20,
  }
});


export default App;