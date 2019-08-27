import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native'
import { Context } from '../context/PlayersContext';

const DraftBoardOptions = () => {
  const { revertPick, qbsSelect } = useContext(Context);

  return (
    <View style={styles.container} >
        <TouchableOpacity onPress={() => setPositionList({
          all: true,
          qbs: false,
          rbs: false,
          wrs: false,
          tes: false
        })}>
          <View style={styles.positionButton} >
            <Text>All</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setPositionList({
          all: false,
          qbs: true,
          rbs: false,
          wrs: false,
          tes: false
        })}>
          <View style={styles.positionButton} >
            <Text>QB</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setPositionList({
          all: false,
          qbs: false,
          rbs: true,
          wrs: false,
          tes: false
        })}>
          <View style={styles.positionButton} >
            <Text>RB</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setPositionList({
          all: false,
          qbs: false,
          rbs: false,
          wrs: true,
          tes: false
        })}>
          <View style={styles.positionButton} >
            <Text>WR</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setPositionList({
          all: false,
          qbs: false,
          rbs: false,
          wrs: false,
          tes: true
        })}>
          <View style={styles.positionButton} >
            <Text>TE</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={revertPick}>
          <View style={styles.revertButton} >
            <Text>Revert Pick</Text>
          </View>
        </TouchableOpacity>
        </View>
  )
}
 
const styles = StyleSheet.create({
  revertButton: {
    width: 100,
    height: 30,
    backgroundColor: '#c6d9ec',
    borderRadius: 5,
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  positionButton: {
    width: 40,
    height: 30,
    backgroundColor: '#c6d9ec',
    borderRadius: 5,
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10
  }
})
 
export default DraftBoardOptions;
