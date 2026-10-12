import React, { useState } from 'react'
import { Button, Col, Container, Input, Row } from 'reactstrap'

const Form1 = () => {
    const [data, setData] = useState({
        fname: "",
        lname: "",
        address: "",
        email: ""
    })

    const handleChange = (e) => {

        console.log(e.target.value,'this is my data babes',e.target.name)
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const handleSubmit = () => {
        alert("form submitted")
    }

    return (
        <div>

            <Container>
                <Row>
                    <Col md={12}>
                        <label>Name</label>
                        <Input type='text' name='fname' onChange={handleChange} />
                    </Col>
                    <Col md={12}>
                        <label>lastname</label>
                        <Input type='text' name='lname' onChange={handleChange} />
                    </Col>
                    <Col md={12}>
                        <label>Address</label>
                        <Input type='text' name='address' onChange={handleChange} />
                    </Col>
                    <Col md={12}>
                        <label>Email</label>
                        <Input type='email' name='email' onChange={handleChange} />
                    </Col>
                    <Col md={12}>
                        <Button onClick={handleSubmit}>
                            Submit
                        </Button>
                    </Col>
                </Row>
            </Container>



        </div>
    )
}

export default Form1
