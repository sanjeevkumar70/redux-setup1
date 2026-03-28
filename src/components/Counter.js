import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { counterActionDecr, counterActionIncr } from '../redux/action/counterAction'

const Counter = () => {
    const dispatch = useDispatch()

    const temp = useSelector(state => state.counter.count)

    const increaseFn = () => {
        dispatch(counterActionIncr())
    }
    const decreaseFn = () => {
        dispatch(counterActionDecr())
    }


    return (
        <div>


            <h1> This is counter {temp}</h1>
            <button onClick={decreaseFn} >Decrease</button>
            <button onClick={increaseFn} >Increase</button>

        </div>
    )
}

export default Counter
