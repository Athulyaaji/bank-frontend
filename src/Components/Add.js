import React, { useContext, useEffect, useState } from 'react'
import './add.css'
import { AlertHeading, Col, Container, Row } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { addApi } from '../service/allApis';
import { useNavigate } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';
import { addContext } from '../bankContext/ContextShare';

function Add() {


     const { addData, setAddData } = useContext(addContext)

    const [errorMsg, setErrorMsg] = useState("")

    const [userData, setUserData] = useState({
        orderid: "",
        itemno: "",
        matid: "",
        matdesp: "",
        curqty: "",
        perqty: "",
        qtydiff: "",
        comment: "",
    })
    const navigate = useNavigate()

    const dataUser = (e) => {
        let value = e.target.value
        let name = e.target.name
        setUserData({ ...userData, [name]: value })

    }
    console.log(userData);


    useEffect(() => {

    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const headerConfig = {
            "Content-Type": "application/json"
        }

        const data = new FormData()
        const { orderid, itemno, matid, matdesp, curqty, perqty, qtydiff, comment } = userData

        data.append('orderid', orderid)
        data.append('itemno', itemno)
        data.append('matid', matid)
        data.append('matdesp', matdesp)
        data.append('curqty', curqty)
        data.append('perqty', perqty)
        data.append('qtydiff', qtydiff)
        data.append('comment', comment)

        const response = await addApi(headerConfig, data)
        console.log(response);
        if (response.status == 200) {

            // update context
            setAddData(response.data)

            setUserData({
                ...userData,
                orderid: "",
                itemno: "",
                matid: "",
                matdesp: "",
                curqty: "",
                perqty: "",
                qtydiff: "",
                comment: "",
            })
            // alert('added data')
            navigate('/')

        }
        else {
            // alert('already exist')
            // console.log(response.response.data);
            setErrorMsg(response.response.data)
        }



    }

    return (

        <div>

            {errorMsg ? <div>
                {[

                    'danger',


                ].map((variant) => (
                    <Alert key={variant} variant={variant} className='w-50 container mt-3'
                        onClose={() => setErrorMsg("")} >

                        {errorMsg}
                    </Alert>
                ))}
            </div> : ""
            }


            <h3 className='text-center mt-4 mb-3' style={{ fontFamily: 'cursive' }}>Add Details of Materials</h3>

            <Container className='bg-warning w-25' >

                <Row>


                    <Col xs={12} sm={6} md={4} lg={9} xl={9} className='mt-4 w-100 ' >
                        <FloatingLabel
                            controlId="floatingInput"

                            label=" ORDER ID"
                            className="mb-1 " >


                            <Form.Control onChange={dataUser} name='orderid' required type="name" placeholder="name@example.com" />
                        </FloatingLabel>

                        <FloatingLabel
                            controlId="floatingInput"
                            label="ITEM NUMBER"
                            className="mb-1">
                            <Form.Control onChange={dataUser} name='itemno' required type="lname" placeholder="name@example.com" />
                        </FloatingLabel>


                        <FloatingLabel
                            controlId="floatingInput"
                            label="MATERIAL ID"
                            className="mb-1">
                            <Form.Control onChange={dataUser} name='matid' required type="lname" placeholder="name@example.com" />
                        </FloatingLabel>


                        <FloatingLabel
                            controlId="floatingInput"
                            label="MATERIAL DESCRIPITION"
                            className="mb-1">
                            <Form.Control onChange={dataUser} name='matdesp' required type="lname" placeholder="name@example.com" />
                        </FloatingLabel>

                        <FloatingLabel
                            controlId="floatingInput"
                            label="CURRENT QUALITY"
                            className="mb-1">
                            <Form.Control onChange={dataUser} name='curqty' required type="lname" placeholder="name@example.com" />
                        </FloatingLabel>

                        <FloatingLabel
                            controlId="floatingInput"
                            label="PERVIOUS QUALITY"
                            className="mb-1">
                            <Form.Control onChange={dataUser} name='perqty' required type="lname" placeholder="name@example.com" />
                        </FloatingLabel>


                        <FloatingLabel
                            controlId="floatingInput"
                            label="QUALITY DIFFERENCE"
                            className="mb-1">
                            <Form.Control onChange={dataUser} name='qtydiff' required type="lname" placeholder="name@example.com" />
                        </FloatingLabel>

                        <FloatingLabel
                            controlId="floatingInput"
                            label="COMMENTS"
                            className="mb-1">
                            <Form.Control onChange={dataUser} name='comment' required type="lname" placeholder="name@example.com" />
                        </FloatingLabel>


                    </Col>








                </Row>

                <div className='text-center p-2'>
                    <button onClick={handleSubmit} type="submit" id='sub' class="btn btn-success text-center ">ADD</button>

                </div>
            </Container>
        </div>

    )
}

export default Add