import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

const Header = props => {
  const { onClear } = props

  return (
    <View style={styles.navBar}>
      <TouchableOpacity>
        <Icon style={styles.back} name="ios-arrow-back" size={25} color="black" />
      </TouchableOpacity>
      <Text style={styles.headerText}>CUSTOM NUMBERS</Text>
      <TouchableOpacity underlayColor="white" onPress={() => onClear()}>
        <Text style={styles.clearText}>CLEAR</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  navBar: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 20,
    alignItems: 'center',
  },
  back: {
    paddingLeft: 30,
  },
  headerText: {
    fontSize: 15,
    fontFamily: 'GothamBold',
    paddingLeft: 75,
  },
  clearText: {
    fontSize: 15,
    fontFamily: 'GothamBold',
    color: '#e52c2c',
    paddingLeft: 45,
  },
})

export default Header
