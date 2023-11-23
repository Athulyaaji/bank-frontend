import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

function TableC({ bankers, removeData }) {
    return (
        <div>
            <Container style={{ alignItems: 'center', justifyContent: "center", display: 'flex',border:'#ff0000',borderRadius:'25px' }}>
                <Row >
                    <Col xs={12} sm={6} md={4} lg={9} xl={9}>
                        <Table striped bordered hover size="l" >
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>ORDER.Id</th>
                                    <th>ITEM.NR</th>
                                    <th>MATERIAL.Id</th>
                                    <th>MATERIAL.DESP</th>
                                    <th>CURRENT.QUTY</th>
                                    <th>PREVIOUS.QTY</th>
                                    <th>QTY.DIFF</th>
                                    <th>COMMENT</th>
                                    <th>&nbsp;&nbsp;<i class="fa-solid fa-circle-minus fa-beat fa-xl "></i></th>
                                </tr>
                            </thead>
                            <tbody>
                                {bankers.length > 0 ? bankers.map((i, index) => (
                                    <tr>
                                        <th>{index + 1}</th>
                                        <th>{i.orderid}</th>
                                        <th>{i.itemno}</th>
                                        <th>{i.matid}</th>
                                        <th>{i.matdesp}</th>
                                        <th>{i.curqty}</th>
                                        <th>{i.perqty}</th>
                                        <th>{i.qtydiff}</th>
                                        <th>{i.comment}</th>
                                        <th>
                                            <div onClick={()=>removeData(i._id)}>
                                                <i style={{ color: 'red' }} class="fa-solid fa-trash-can fa-xl"></i>

                                            </div>                                   </th>
                                    </tr>

                                ))
                                    : "no  data present"
                                }



                            </tbody>
                        </Table>
                    </Col>
                </Row>

            </Container>

        </div>
    )
}

export default TableC