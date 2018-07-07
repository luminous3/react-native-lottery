import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

const ButtonBasic = props => {
  return (
    <View style={styles.saveButtonContainer}>
      <TouchableOpacity>
        <View style={styles.saveButtonWrapper}>
          <Text style={styles.saveButton}>{props.children}</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  saveButtonContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  saveButtonWrapper: {
    backgroundColor: '#32ba54',
    width: 200,
    height: 50,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  saveButton: {
    color: 'white',
    width: '100%',
    fontFamily: 'GothamBold',
    textAlign: 'center',
  },
})

export default ButtonBasic
