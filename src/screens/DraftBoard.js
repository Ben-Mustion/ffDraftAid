import React from 'react';
import { View, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import PlayerList from '../components/PlayerList';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';


const DraftBoard = () => {

  return (
    <View style={{ paddingBottom: 300 }}>
      <PlayerList />
    </View>
  )
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
    ),
    title: 'Draft Board'
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
