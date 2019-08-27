import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Context } from '../context/PlayersContext';

const PlayerDetail = ({ result, tier }) => {
  const { draftPlayer } = useContext(Context);


  const colorPicker = () => { 
    if (tier === 1 || tier === 5 || tier === 9 || tier === 13 || tier === 17 || tier === 21 || tier === 25 || tier === 29) {
      return "#00ff99";
    } else if (tier === 2 || tier === 6 || tier === 10 || tier === 14 || tier === 18 || tier === 22 || tier === 26 || tier === 30) {
      return "#f2c385";
    } else if (tier === 3 || tier === 7 || tier === 11 || tier === 15 || tier === 19 || tier === 23 || tier === 27 || tier === 31) {
      return "#a6dff7";
    }
  };

  return (
    <TouchableOpacity onPress={() => draftPlayer(result.name)} >
      <View style={{...styles.container, backgroundColor: colorPicker()}} >
        <Text style={styles.textTier}>{result.tier}</Text>
        <Text style={styles.textName}>{result.name}</Text>
        <Text style={styles.textRank}>{result.rank}</Text>
        <Text style={styles.textPosition}>{result.position}</Text>
      </View>
    </TouchableOpacity>
  )
};



const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    height: 60,
    justifyContent: 'center', 
    alignItems: 'center',
    paddingVertical: 5
  },
  textName: {
    flex: 6,
    fontSize: 22,
    marginLeft: 5
  },
  textRank: {
    flex: 1,
    fontSize: 22,
    marginLeft: 5
  },
  textTier: {
    flex: 1,
    fontSize: 22,
    marginLeft: 5
  },
  textPosition: {
    flex: 1,
    fontSize: 22,
    marginLeft: 5
  }
})

export default PlayerDetail;
