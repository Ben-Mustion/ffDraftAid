import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import PlayerList from '../components/PlayerList';
import { AntDesign } from '@expo/vector-icons';


const DraftBoard = () => {
    if (<PlayerList />) {
      return (
      <View>
        <PlayerList />
      </View>
      )
    } else {
      return (
        <Text>Loading</Text>
      )
    }
};

DraftBoard.navigationOptions = ({ navigation }) => {
  return {
    headerLeft: (
      <TouchableOpacity style={styles.homeButton} 
        onPress={() => {
          Alert.alert("Are you sure?", "Draft board will be reset", [{
            title: "Go Back to Main Menu",
            onPress: () => navigation.navigate("Main")
          }])
      }}>
        <AntDesign size={30} name="back"/>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    alignSelf: 'center'
  },
  homeButton: {
    marginLeft: 10
  }
});

export default DraftBoard;
