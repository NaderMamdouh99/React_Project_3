import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { Zoom } from "react-reveal";



const CardList = ({ itemsData }) => {

    // Return Card with Using Map Function 
    return (
        <Row>
            {
                itemsData.length ? (itemsData.map((item) => {
                    return (
                        <Zoom >
                            <Row>
                                <Col key={item.id} className='mb-3'>
                                    <Card>
                                        <Row>
                                            <div className='d-flex flex-row'>
                                                <Col sm="6" md="5" lg="3">
                                                    <Card.Img variant='top' style={{ height: '180px', width: '252px', borderRadius: '5px' }} src={item.img} />
                                                </Col>
                                                <Col sm="6" md="7" lg="9">
                                                    <Card.Body>
                                                        <Card.Title className='d-flex justify-content-between'>
                                                            <div className='item-title'>{item.title}</div>
                                                            <div className='item-price'>{item.price}</div>
                                                        </Card.Title>
                                                        <Card.Text className='py-2'>
                                                            <div className='item-description'>
                                                                {item.description}
                                                            </div>
                                                        </Card.Text>
                                                    </Card.Body>
                                                </Col>
                                            </div>
                                        </Row>
                                    </Card>
                                </Col>
                            </Row>
                        </Zoom>
                    )
                })) : (<h3 className="text-center">لا يوجد وجبات</h3>)
            }
        </Row>
    )
}

export default CardList
