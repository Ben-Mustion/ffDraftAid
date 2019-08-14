import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../components/common/Button';

const MainMenu = () => {
  return (
    <View style={styles.container}>
    <Text style={styles.text}>Select Your Scoring Format</Text>
      <Button title="Standard" />
      <Button title="0.5 PPR" />
      <Button title="PPR" />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    fontSize: 25,
    marginVertical: 10
  }
});

export default MainMenu;
