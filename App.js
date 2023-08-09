import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { Feather } from '@expo/vector-icons'
import Button from './components/Btn'
import { useState } from 'react'
import { StateContext } from './utils/context'
export default function App() {
  const [prevValue, setPrevValue] = useState('')
  const [currentValue, setCurrentValue] = useState('')

  return (
    <SafeAreaView className='bg-slate-200 w-full h-full'>
      <View className='bg-gray-300 flex-1 rounded-b-2xl justify-end items-end shadow-lg shadow-black'>
        <Text
          className='text-[30px] mx-4 '
          style={{ textAlign: 'right' }}
        >
          {prevValue}
        </Text>

        <Text
          className='text-[53px] mx-4 '
          style={{ textAlign: 'right' }}
        >
          {currentValue}
        </Text>
      </View>
      <View className='flex-row flex-wrap justify-center my-10 '>
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
                color='black'
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
