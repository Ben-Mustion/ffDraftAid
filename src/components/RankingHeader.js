import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

const RankingHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textTier}>
        <Text>Tier</Text>
      </View>
      <View style={styles.textName}>
        <Text >Player Name</Text>
      </View>
      <View style={styles.textRank}>
      <Text>Rank</Text>
      </View>
      <View style={styles.textPosition}>
        <Text>Pos.</Text>
      </View>
    </View>
  )
}
 
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 3,
    borderBottomColor: 'gray',
    borderTopWidth: 1,
    borderTopColor: 'gray',
    height: 50,
    justifyContent: 'center'
  },
  textName: {
    justifyContent: 'center',
    alignContent: 'center',
    flex: 6,
    fontSize: 22,
    marginLeft: 5,
    borderRightColor: "black",
    borderRightWidth: 1
  },
  textRank: {
    justifyContent: 'center',
    alignContent: 'center',
    flex: 1,
    fontSize: 22,
    borderRightColor: "black",
    borderRightWidth: 1,
    marginLeft: 5
  },
  textTier: {
    justifyContent: 'center',
    alignContent: 'center',
    flex: 1,
    fontSize: 22,
    borderRightColor: "black",
    borderRightWidth: 1,
    marginLeft: 5
  },
  textPosition: {
    justifyContent: 'center',
    alignContent: 'center',
    flex: 1,
    fontSize: 22,
    marginLeft: 5
  },
})
 
export default RankingHeader;