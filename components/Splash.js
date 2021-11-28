import React from 'react';
import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';
import image from '../assets/images/Completed.gif';

export default class Splash extends React.Component {
    componentDidMount() {
        setTimeout(() => {
          firebase.auth().onAuthStateChanged(user => {
            this.props.navigation.navigate(user ? 'Home' : 'Register');
          });
        }, 1800);
      }
  render() {
    return (
      <View style={styles.container}>
          <Image source={image} style={styles.imageStyle}/>
        <Text style={{color: 'darkBlue', fontSize: 40}}>MyNanoria</Text>
        <ActivityIndicator color="blue" size="large" />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});