import React, { useState } from 'react';
import PropType from 'prop-types';
import { Footer } from './Footer';

const Counter = ({value}) => {
    const [counter, setCounter] = useState(value);

    // !Sumar
    const handleAdd = () => {
      setCounter(counter + 1);
    }

    // !Restar
    const handleMinus = () => {
        if(counter > 0){
            setCounter(counter -1);
        }else{
            setCounter(value);
        }
    }
    // !Reset
    const handleReset = () => {
      setCounter(value);
    }

  return (
    <>
    <h1>Contador</h1>
    <hr/>
    <div className='div__counter'>
        <h2 className='div__counter__number'>{counter}</h2>
    </div>
    <button className='button__plus' onClick={()=> handleAdd()}>+</button>
    <button className='button__reset' onClick={handleReset}>reset</button>
    <button className='button__minus' onClick={handleMinus}>-</button>
    <Footer />
    </>
  )
}

Counter.prototype = {
    value: PropType.number.isRequired
}
export default Counter;