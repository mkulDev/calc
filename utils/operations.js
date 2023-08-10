import { create, all } from 'mathjs'
import { Alert } from 'react-native'

const config = {}
const math = create(all, config)

const integers = ['1', '2', '3', '4', '5', '6', '7', '8', '9']

export function addNumber(value, prevValue, setPrevValue, setCurrentValue) {
  let cValue = null
  if (integers.includes(value)) cValue = prevValue + value
  if (value === '.' && !prevValue.split('').includes(value)) cValue = prevValue + value
  if (value === '0' && prevValue !== '0') cValue = prevValue + '0'
  if (value === '0' && prevValue === '0') cValue = prevValue

  setPrevValue(cValue)
  if (prevValue.split('').some((item) => ['+', '-', '×', '/'].includes(item))) {
    const expresion = handleBrackets(cValue)
    let result = math.evaluate(expresion)
    // If our result is infinity, we reset the calc.
    if (result === Infinity) {
      result = ''
      Alert.alert('Divide by 0 cannot be done.')
      setCurrentValue(result)
      setPrevValue(result)
    }
    setCurrentValue(result)
  }
}

export function clear(setPrevValue, setCurrentValue) {
  setPrevValue('')
  setCurrentValue('')
}

export function backspace(prevValue, setPrevValue) {
  if (prevValue && prevValue.length >= 1) return setPrevValue(prevValue.substring(0, prevValue.length - 1))
}

export function addBracket(prevValue, setPrevValue) {
  if (prevValue.includes('(') && prevValue.slice(-1) !== '(' && prevValue.split('').filter((element) => element === '(').length > prevValue.split('').filter((element) => element === ')').length) return setPrevValue(prevValue + ')')
  if (!prevValue || !integers.includes(prevValue.slice(-1))) return setPrevValue(prevValue + '(')
  else if ([...integers, 0].includes(prevValue.slice(-1))) return setPrevValue(prevValue + '(')
}

export function addOperator(value, prevValue, setPrevValue) {
  if (['+', '-'].includes(value)) setPrevValue(prevValue + value)
  if (value === '×') setPrevValue(prevValue + value)
  if (value === '/') setPrevValue(prevValue + value)
}

export function percentages(prevValue, setPrevValue, setCurrentValue) {
  const multipler = 0.01
  const decimalPrecision = 2
  const expresion = handleBrackets(prevValue)
  let result = math.evaluate(expresion)
  if (result === Infinity) {
    result = ''
    Alert.alert('Divide by 0 cannot be done.')
  } else {
    result = (result * multipler).toFixed(decimalPrecision)
  }

  setCurrentValue(result)
  setPrevValue(result)
}

export function equals(prevValue, setPrevValue, setCurrentValue) {
  const expresion = handleBrackets(prevValue)
  let result = math.evaluate(expresion)
  if (result === Infinity) {
    result = ''
    Alert.alert('Divide by 0 cannot be done.')
  }
  setCurrentValue(result)
  setPrevValue(result)
}

function handleBrackets(value) {
  let expresion = value.toString().replaceAll('×', '*')
  if (expresion.includes('(')) {
    const numberOfNeededBrackets = expresion.split('').filter((symbol) => symbol === '(').length - expresion.split('').filter((symbol) => symbol === ')').length
    for (let i = 0; i < numberOfNeededBrackets; i++) {
      expresion = expresion + ')'
    }
  }
  return expresion
}
