import React, { useEffect, useState } from 'react'

const Home = () => {

    const [data, setData] = useState([])

    useEffect(() => {

        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(mydata => setData(mydata.products))

    }, [])

    console.log(data, 'this is cuteee data')

    return (
        <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
            padding: "20px"
        }}>
            {data.map((item) => (
                <div key={item.id} style={{
                    border: "1px solid #ddd",
                    borderRadius: "10px",
                    padding: "15px",
                    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                    textAlign: "center",
                    backgroundColor: "#fff"
                }}>
                    <img 
                        src={item.thumbnail} 
                        alt={item.title}
                        style={{
                            width: "100%",
                            height: "200px",
                            objectFit: "cover",
                            borderRadius: "8px"
                        }}
                    />

                    <h3 style={{ margin: "10px 0" }}>
                        {item.title}
                    </h3>

                    <p style={{
                        fontSize: "14px",
                        color: "#555",
                        height: "40px",
                        overflow: "hidden"
                    }}>
                        {item.description}
                    </p>

                    <h4 style={{ color: "green", margin: "10px 0" }}>
                        ₹ {item.price}
                    </h4>

                    <button style={{
                        padding: "8px 15px",
                        border: "none",
                        borderRadius: "5px",
                        backgroundColor: "#000",
                        color: "#fff",
                        cursor: "pointer"
                    }}>
                        Add to Cart
                    </button>

                </div>
            ))}
        </div>
    )
}

export default Home
