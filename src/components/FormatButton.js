import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const FormatButton = ({ onPress, title }) => {
  return (
      <TouchableOpacity onPress={onPress} >
        <View style={styles.scoringSelector}>
          <Text style={styles.text}>{title}</Text>
        </View>
      </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  scoringSelector: {
    width: 250,
    height: 125,
    backgroundColor: '#c6d9ec',
    borderRadius: 20,
    margin: 15,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 40
  }
});

export default FormatButton;
