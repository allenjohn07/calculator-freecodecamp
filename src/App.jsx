import React from 'react'
import './App.css'
import { useState } from 'react'

function App() {

  const [display, setDisplay] = useState('0')
  const [flag, setFlag] = useState(true)

  const handleNumber = (e) => {
    setFlag(false)
    const number  = e.target.textContent;

    if(display === '0'){
      setDisplay(number)
    }else{
      setDisplay(display + number)
    }
  }

  const handleOperator = (e) => {
    const operator = e.target.textContent;
    if(flag){
      return
    }
    setDisplay(display + ' ' + operator + ' ')
    setFlag(true);
  }

  const handleEqual = () => {
    setDisplay(eval(display))
  }

  const handleAllClear = () => {
    setDisplay('0')
  }

  const handleDecimal = () => {
    const array = display.split(' ')
    const lastElement = array[array.length-1]

    if(!lastElement.includes('.') && lastElement.length>0){
      setDisplay(display + '.')
    }
  }

  return (
    <div className='App'>
      <div>
        <h1>JavaScript Calculator</h1>
        <div className="calculator">
          <div id="display" className="row">{display}</div>
          <div onClick={handleAllClear} id="clear" className="row buttons">
            ALL CLEAR
          </div>
          <div className='buttons' onClick={handleNumber} id="seven">7</div>
          <div className='buttons' onClick={handleNumber} id="eight">8</div>
          <div className='buttons' onClick={handleNumber} id="nine">9</div>
          <div className='buttons' onClick={handleOperator} id="multiply">*</div>
          <div className='buttons' onClick={handleNumber} id="four">4</div>
          <div className='buttons' onClick={handleNumber} id="five">5</div>
          <div className='buttons' onClick={handleNumber} id="six">6</div>
          <div className='buttons' onClick={handleOperator} id="divide">/</div>
          <div className='buttons' onClick={handleNumber} id="one">1</div>
          <div className='buttons' onClick={handleNumber} id="two">2</div>
          <div className='buttons' onClick={handleNumber} id="three">3</div>
          <div className='buttons' onClick={handleOperator} id="add">+</div>
          <div className='buttons' onClick={handleNumber} id="zero">0</div>
          <div className='buttons' onClick={handleDecimal} id="decimal">.</div>
          <div className='buttons' onClick={handleEqual} id="equals">=</div>
          <div className='buttons' onClick={handleOperator} id="subtract">-</div>
        </div>
      </div>
    </div>
  )
}

export default App