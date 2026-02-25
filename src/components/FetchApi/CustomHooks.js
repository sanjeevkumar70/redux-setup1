import React, { useState } from 'react'

const useCounter = () => {
    const [count, setCount] = useState(0);

    const decrease = () => {
        setCount(count - 1)
    }
    const increase = () => {
        setCount(count + 1)
    }

    return { count, decrease, increase }
}

export default useCounter
