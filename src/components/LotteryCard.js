import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableHighlight, TouchableOpacity } from 'react-native'
import { times, includes, indexOf, filter, omit } from 'lodash'
import Confetti from 'react-native-confetti'

import CustomNumberList from './CustomNumberList'
import NumberPanel from './NumberPanel'
import Header from './Header'
import Button from './Button'

const CUSTOM_NUMBERS = 6

const initialState = {
  numbers: times(CUSTOM_NUMBERS, ''),
  currentNumber: null,
  selected: 0,
  saveTicket: false,
}

class LotteryCard extends Component {
  state = initialState

  shiftNumbers(number) {
    const { numbers } = this.state
    let newNumbers = numbers.filter(n => n != number)
    newNumbers.push('')
    return newNumbers
  }

  onPress(number) {
    const { currentNumber, numbers, selected } = this.state
    const pressed = includes(numbers, number)
    let newNumbers = Object.assign([], numbers)

    if (pressed) {
      newNumbers = this.shiftNumbers(number)
      this.setState({
        currentNumber: newNumbers[selected - 2],
        numbers: newNumbers,
        selected: selected - 1,
        saveTicket: false,
      })
      return
    }

    if (selected < 6) {
      newNumbers[selected] = number

      this.setState({
        currentNumber: number,
        numbers: newNumbers,
        selected: selected + 1,
        saveTicket: selected === 5 ? true : false,
      })
    }
  }

  onClear() {
    this.setState(initialState)
  }

  onSaveTicket() {
    this._confettiView.startConfetti()
  }

  render() {
    const { numbers, saveTicket } = this.state
    return (
      <View>
        <View style={styles.view}>
          <Header onClear={this.onClear.bind(this)} />
          <CustomNumberList {...this.state} />
          <NumberPanel onPress={this.onPress.bind(this)} numbers={numbers} />
          {saveTicket && <Button onPress={this.onSaveTicket.bind(this)}>SAVE TICKET</Button>}
          <Confetti ref={node => (this._confettiView = node)} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#f8f8f8',
    height: 120,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    elevation: 2,
    position: 'relative',
  },
})

export default LotteryCard
