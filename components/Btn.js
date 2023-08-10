import { View, Text, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import { clear, addNumber, backspace, addBracket, addOperator, equals, percentages } from '../utils/operations'
import { StateContext } from '../utils/context'
import { useContext } from 'react'
const Btn = ({ value, operation }) => {
  const { width } = Dimensions.get('window')
  const { prevValue, setPrevValue, setCurrentValue } = useContext(StateContext)

  const operationFunctions = {
    addNumber: { func: addNumber, arguments: [value, prevValue, setPrevValue, setCurrentValue] },
    clear: { func: clear, arguments: [setPrevValue, setCurrentValue] },
    backspace: { func: backspace, arguments: [prevValue, setPrevValue, setCurrentValue] },
    addBracket: { func: addBracket, arguments: [prevValue, setPrevValue] },
    addOperator: { func: addOperator, arguments: [value, prevValue, setPrevValue, setCurrentValue] },
    equals: { func: equals, arguments: [prevValue, setPrevValue, setCurrentValue] },
    percentages: { func: percentages, arguments: [prevValue, setPrevValue, setCurrentValue] }
  }

  const chosenOperation = operationFunctions[operation]

  return (
    <TouchableOpacity
      className={`justify-center items-center m-2 p-2 rounded-2xl  ${value === '=' ? ' bg-orange-400 border-4 border-[#ff9d4d]' : 'bg-[#303841] border-4 border-[#444a52]'} shadow-xl shadow-black`}
      onPress={() => {
        chosenOperation.func(...chosenOperation.arguments)
      }} // Spread the previous state and add the value
      style={{ width: width * 0.18, height: width * 0.18 }}
    >
      <Text className='text-2xl text-[#f3f3f3]'>{value}</Text>
    </TouchableOpacity>
  )
}

export default Btn
