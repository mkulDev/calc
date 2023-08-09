import { View, Text, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import { clear, addNumber, backspace, addBracket, addOperator, equals, percentages } from '../utils/operations'
import { StateContext } from '../utils/context'
import { useContext } from 'react'
const Btn = ({ value, operation }) => {
  const { width } = Dimensions.get('window')
  const { prevValue, setPrevValue, setCurrentValue } = useContext(StateContext)

  const operationFunctions = {
    addNumber: { func: addNumber, arguments: [value, prevValue, setPrevValue] },
    clear: { func: clear, arguments: [setPrevValue, setCurrentValue] },
    backspace: { func: backspace, arguments: [prevValue, setPrevValue] },
    addBracket: { func: addBracket, arguments: [prevValue, setPrevValue] },
    addOperator: { func: addOperator, arguments: [value, prevValue, setPrevValue] },
    equals: { func: equals, arguments: [prevValue, setPrevValue, setCurrentValue] },
    percentages: { func: percentages, arguments: [prevValue, setPrevValue, setCurrentValue] }
  }

  const chosenOperation = operationFunctions[operation]

  return (
    <TouchableOpacity
      className={`justify-center items-center m-2 p-2 rounded-2xl  ${value === '=' ? ' bg-orange-400' : 'bg-gray-300'} shadow-xl shadow-black`}
      onPress={() => {
        chosenOperation.func(...chosenOperation.arguments)
      }} // Spread the previous state and add the value
      style={{ width: width * 0.2, height: width * 0.2 }}
    >
      <Text className='text-2xl'>{value}</Text>
    </TouchableOpacity>
  )
}

export default Btn
