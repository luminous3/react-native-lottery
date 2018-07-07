import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const CustomNumber = props => {
  const { value, current } = props

  return (
    <View style={[styles.container, current && { backgroundColor: '#e52c2c' }]}>
      <Text style={[styles.text, current && { color: 'white' }]}>{value}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    elevation: 2,
    marginLeft: 5,
    marginRight: 5,
    width: 30,
    height: 30,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: 'black',
    fontWeight: '600',
    width: '100%',
    textAlign: 'center',
  },
})

export default CustomNumber
