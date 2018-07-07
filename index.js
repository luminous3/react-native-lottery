import React from 'react'
import { AppRegistry, View } from 'react-native'
import LotteryCard from './src/components/LotteryCard'

const App = () => (
  <View style={{ flex: 1 }}>
    <LotteryCard />
  </View>
)

AppRegistry.registerComponent('lottery', () => App)
