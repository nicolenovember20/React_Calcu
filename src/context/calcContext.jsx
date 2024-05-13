import { useState, createContext, useEffect } from "react"
import { evaluate } from "mathjs"

export const CalcContext = createContext()

export const CalcProvider = ({ children }) => {

  const [display, setDisplay] = useState('')

  const updateDisplay = (e) => {
    setDisplay(e)
  }

  const allowedKeys = ['Backspace', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '(', ')', '+', '-', '*', '/', '%', '=', '.', 'Enter', 'ArrowLeft', 'ArrowRight']

  const [focusDisplay, setFocusDisplay] = useState(false)

  const onFocusDisplay = () => {
    setFocusDisplay(true)
  }

  const onBlurDisplay = () => {
    setFocusDisplay(false)
  }

  const buttonClick = (num) => {
    const keyPressEvent = new KeyboardEvent('keydown', { key: num })
    document.dispatchEvent(keyPressEvent);
  }

  const equalClick = () => {
    try {
      if (display.length > 0) {
        setDisplay(evaluate(display.replaceAll(',', '')).toLocaleString('en-US', {
          minimumFractionDigits: 2, maximumFractionDigits: 8
        }))
      }
    } catch (error) {
      setDisplay('SYNTAX ERROR')
      setTimeout(() => {
        setDisplay('')
      }, 1500)
    }
  }

  const clearClick = () => {
    setDisplay('')
  }

  //
  // The next functions & useEffect allow users to manipulate the calculator using the keyboard
  //

  const backspace = () => {
    setDisplay(display.slice(0, -1))
  }

  const opKey = (op) => {
    setDisplay(display + op)
  }

  const handleKeyDown = (e) => {
    if (allowedKeys.includes(e.key)) {
      switch (e.key) {
        case 'Backspace':
          !focusDisplay && backspace()
          break
        case '=':
          e.preventDefault()
          equalClick()
          break
        case 'Enter':
          e.preventDefault()
          equalClick()
          break
        default:
          !focusDisplay && opKey(e.key)
          break
      }
    } else {
      e.preventDefault()
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  })

  //
  //
  //

  return (
    <CalcContext.Provider value={{ display, updateDisplay, onFocusDisplay, onBlurDisplay, buttonClick, equalClick, clearClick }}>
      {children}
    </CalcContext.Provider>
  )
}