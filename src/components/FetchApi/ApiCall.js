import { useEffect, useState } from "react"


export const ApiCall = () => {

    const [data, setData] = useState([]);


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos', {
            headers: {
                // this is api key
                INDIGO_API_KEY: "uiodshjfopidjslfijsdipfjoipdsf"
            }
        })
            .then(res => res.json())
            .then(abc => setData(abc))
    }, [])


    console.log(data, "data")


    return (
        <>

            {data.map((item) => <h1>{item.title}</h1>)}

        </>
    )
}