import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
export default function Header() {
  return (
    <View style={styles.header}>
      <MaterialIcons name='menu' size={28}/>
      <View>
        <Text style={styles.headerText}>MyNanoria</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignītems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#333',
    letterSpacing: 1,
  },
});
