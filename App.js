import { Text, View, SafeAreaView, StatusBar } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import Button from './components/Btn'
import { useState } from 'react'
import { StateContext } from './utils/context'
import Logo from './assets/Logo.png'
export default function App() {
  const [prevValue, setPrevValue] = useState('')
  const [currentValue, setCurrentValue] = useState('')

  return (
    <SafeAreaView className='bg-[#f3f3f3] w-full h-full'>
      <StatusBar
        backgroundColor='white'
        barStyle='dark-content'
      />
      <View className='bg-[#d2d2d2] flex-1 rounded-b-2xl justify-end items-end  shadow-xl shadow-black'>
        <Text
          className='text-[30px] mx-4 text-[#303841]'
          style={{ textAlign: 'right' }}
        >
          {prevValue}
        </Text>

        <Text
          className='text-[53px] mx-4 text-[#303841]'
          style={{ textAlign: 'right' }}
        >
          {currentValue}
        </Text>
      </View>
      <View className='flex-row flex-wrap justify-center my-12 mx-4'>
        <StateContext.Provider value={{ prevValue, setPrevValue, setCurrentValue }}>
          <Button
            value='AC'
            operation='clear'
          />
          <Button
            value='( )'
            operation='addBracket'
          />
          <Button
            value='%'
            operation='percentages'
          />
          <Button
            value='/'
            operation='addOperator'
          />
          <Button
            value='1'
            operation='addNumber' // addNumber, clear, Add, Substract, multiplicate, divide, equal
          />
          <Button
            value='2'
            operation='addNumber'
          />
          <Button
            value='3'
            operation='addNumber'
          />
          <Button
            value='×'
            operation='addOperator'
          />
          <Button
            value='4'
            operation='addNumber'
          />
          <Button
            value='5'
            operation='addNumber'
          />
          <Button
            value='6'
            operation='addNumber'
          />
          <Button
            value='-'
            operation='addOperator'
          />
          <Button
            value='7'
            operation='addNumber'
          />
          <Button
            value='8'
            operation='addNumber'
          />
          <Button
            value='9'
            operation='addNumber'
          />
          <Button
            value='+'
            operation='addOperator'
          />
          <Button
            value='.'
            operation='addNumber'
          />
          <Button
            value='0'
            operation='addNumber'
          />
          <Button
            value={
              <Ionicons
                name='backspace-outline'
                size={24}
                color='#f3f3f3'
              />
            }
            operation='backspace'
          />

          <Button
            value='='
            operation='equals'
          />
        </StateContext.Provider>
      </View>
    </SafeAreaView>
  )
}
