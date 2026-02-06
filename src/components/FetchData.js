import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAction } from '../redux/action/fetchAction'

const FetchData = () => {
    const dispatch = useDispatch()

    const temp = useSelector(state => state.counter.count)


    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then(res => res.json())
            .then(data => dispatch(fetchAction(data)))

    }, [])


    return (
        <div>

            Fectch api page
            <h1>This is counter{temp}</h1>

        </div>
    )
}

export default FetchData
