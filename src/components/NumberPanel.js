import React from 'react'
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native'
import { includes } from 'lodash'

const NUMBER_PANEL = 69

const NumberPanel = props => {
  const { numbers, onPress } = props

  return (
    <View style={styles.panel}>
      {[...Array(NUMBER_PANEL)].map((e, i) => {
        const taken = includes(numbers, i + 1)
        return (
          <TouchableHighlight
            style={[
              styles.numberWrapper,
              taken && {
                borderRadius: 20,
                borderWidth: 2,
              },
            ]}
            key={'panel' + i}
            onPress={() => onPress(i + 1)}
            underlayColor="white"
          >
            <Text style={taken ? styles.panelNumberTaken : styles.panelNumberFree}>{i + 1}</Text>
          </TouchableHighlight>
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  panel: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: 25,
    paddingTop: 50,
  },
  numberWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 40,
    height: 40,
  },
  panelNumberFree: {
    color: 'gray',
    borderColor: 'white',
    textAlign: 'center',
    width: '100%',
    fontSize: 18,
  },
  panelNumberTaken: {
    color: 'black',
    width: '100%',
    borderColor: 'black',
    textAlign: 'center',
    fontSize: 18,
  },
})

export default NumberPanel
