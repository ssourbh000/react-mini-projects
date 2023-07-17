import React from 'react'
import add, {sub, div, mult}  from './CalcFunction'





function Calculator() {
    return (
        <ol>
            <li>Sum of two number is {add(40,4)}</li>
            <li>Subtraction of two number is {sub(40,4)}</li>
            <li>Division of two number is {div(40,4)}</li>
            <li>Multiplication of two number is {mult(40,4)}</li>
        </ol>
    )
}

export default Calculator
