import React from 'react'
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native'

import CustomNumber from './CustomNumber'

const CustomNumberList = props => {
  const { numbers, currentNumber, selected } = props

  return (
    <View style={styles.numbers}>
      {numbers.map((e, i) => {
        const isCurrent = e === currentNumber
        return <CustomNumber key={i} value={e} current={isCurrent} />
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  numbers: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 15,
  },
})

export default CustomNumberList
