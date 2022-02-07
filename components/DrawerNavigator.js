import * as React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import About from './components/About';

const Drawer = createDrawerNavigator()

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName='TabNavigator'>
      <Drawer.Screen name="About" component={About} />
    </Drawer.Navigator>
  )
}

export default DrawerNavigator;