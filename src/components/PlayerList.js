import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import PlayerDetail from './PlayerDetail';
import RankingHeader from '../components/RankingHeader';
import { Context } from '../context/PlayersContext';

const PlayerList = ({ initialValues }) => {
  const { state, revertPick } = useContext(Context);
  const [positionList, setPositionList] = useState(initialValues.positionList);
  const playerList = state;
  const qbs = state.filter((player) => player.position === "QB");
  const rbs = state.filter((player) => player.position === "RB");
  const wrs = state.filter((player) => player.position === "WR");
  const tes = state.filter((player) => player.position === "TE");

  if (positionList.all) {
    return (
      <View>
        <View style={styles.container} >
        <TouchableOpacity onPress={() => setPositionList({
          all: true,
          qbs: false,
          rbs: false,
          wrs: false,
          tes: false
        })}>
          <View style={{...styles.positionButton, backgroundColor: '#05ff1a'}} >
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
        <RankingHeader />
        <View>
          <FlatList
            data={playerList}
            keyExtractor={(result) => result.name}
            renderItem={({ item }) => {
              return (
                <PlayerDetail result={item} tier={item.tier} />
              )
            }} 
          />
        </View>
      </View>
    )
  } else if (positionList.qbs) {
    return (
      <View>
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
          <View style={{...styles.positionButton, backgroundColor: '#05ff1a'}} >
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
        <RankingHeader />
        <View>
          <FlatList 
            data={qbs}
            keyExtractor={(result) => result.name}
            renderItem={({ item }) => {
              return (
                <PlayerDetail result={item} tier={item.tier} />
              )
            }} 
          />
        </View>
      </View>
    )
  } else if (positionList.rbs) {
    return (
      <View>
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
          <View style={{...styles.positionButton, backgroundColor: '#05ff1a'}} >
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
        <RankingHeader />
        <View>
          <FlatList 
            data={rbs}
            keyExtractor={(result) => result.name}
            renderItem={({ item }) => {
              return (
                <PlayerDetail result={item} tier={item.tier} />
              )
            }} 
          />
        </View>
      </View>
    )
  } else if (positionList.wrs) {
    return (
      <View>
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
          <View style={{...styles.positionButton, backgroundColor: '#05ff1a'}} >
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
        <RankingHeader />
        <View>
          <FlatList 
            data={wrs}
            keyExtractor={(result) => result.name}
            renderItem={({ item }) => {
              return (
                <PlayerDetail result={item} tier={item.tier} />
              )
            }} 
          />
        </View>
      </View>
    )
  } else if (positionList.tes) {
    return (
      <View>
        
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
          <View style={{...styles.positionButton, backgroundColor: '#05ff1a'}} >
            <Text>TE</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={revertPick}>
          <View style={styles.revertButton} >
            <Text>Revert Pick</Text>
          </View>
        </TouchableOpacity>
        </View>
        <RankingHeader />
        <View>
          <FlatList 
            data={tes}
            keyExtractor={(result) => result.name}
            renderItem={({ item }) => {
              return (
                <PlayerDetail result={item} tier={item.tier} />
              )
            }} 
          />
        </View>
      </View>
    )
   }
};

PlayerList.defaultProps = {
  initialValues: {
    positionList: {
      all: true,
      qbs: false,
      rbs: false,
      wrs: false,
      tes: false
    },
  }
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

export default PlayerList;
