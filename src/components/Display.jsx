import { useContext } from 'react'
import { CalcContext } from '../context/calcContext'

function Display() {

  const { display, updateDisplay, onFocusDisplay, onBlurDisplay } = useContext(CalcContext)

  const handleChange = (e) => {
    updateDisplay(e.target.value)
  }

  return (
    <input type='text' id='display' className='display fs-1' value={display} onChange={handleChange} onFocus={onFocusDisplay} onBlur={onBlurDisplay} />
  )
}

export default Display