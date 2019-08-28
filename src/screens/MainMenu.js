import React, { useContext } from 'react';
import { View, Text, StyleSheet, Linking } from 'react-native';
import FormatButton from '../components/FormatButton';
import { Context } from '../context/PlayersContext';

const MainMenu = ({ navigation }) => {
  const { state, getStandardRankings, getHalfPPRRankings, getPPRRankings } = useContext(Context);
 
  onStandardPress = () => {
    navigation.navigate('Draft', {prevScreenTitle: 'Main Menu'});
    getStandardRankings();
  }

  onHalfPPRPress = () => {
    navigation.navigate('Draft', {prevScreenTitle: 'Main Menu'});
    getHalfPPRRankings();
  }

  onPPRPress = () => {
    navigation.navigate('Draft', {prevScreenTitle: 'Main Menu'});
    getPPRRankings();
  }

  return (
    <View style={styles.container}>
    <Text style={styles.text}>Select Your Scoring Format</Text>
      <FormatButton 
        title="Standard" 
        onPress={onStandardPress}
      />
      <FormatButton 
        title="0.5 PPR"
        onPress={onHalfPPRPress} 
      />
      <FormatButton 
        title="PPR" 
        onPress={onPPRPress} 
      />
      <View>
        <Text style={{ alignSelf: 'center' }}>Click a player to draft them</Text>
        <Text>  </Text>
        <Text style={{ alignSelf: 'center' }}>Players grouped into tiers and sorted by rankings</Text>
        <Text>  </Text>
        <Text>  </Text>
        <Text>  </Text>
        <Text style={{ alignSelf: 'center' }} onPress={ () => Linking.openURL('https://fantasy-football-draft-aid.herokuapp.com')}>Privacy Policy</Text>
        
      </View>
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
