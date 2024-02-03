import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Rotate } from 'react-reveal';

const Categroy = ({ filterCategroy, allCategroy }) => {
    // Function to Make Filtering By Categroyes Using Button 
    const onFliter = (cat) => {
        filterCategroy(cat);
    }
    return (
        <Row className='my-2 mb-5'>
            <Col sm="12" className='justify-content-center d-flex'>
                {
                    allCategroy.length ? (allCategroy.map((item) => {
                        return (
                            <Rotate >
                                <div key={Math.random()}>
                                    <button
                                        style={{ border: '1px solid #b45b35' }}
                                        onClick={() => onFliter(item)}
                                        className='btn-categroy mx-2'>
                                        {item}
                                    </button>
                                </div>
                            </Rotate>
                        )
                    })) : (<h4>لا يوجد اصناف</h4>)
                }

            </Col>
        </Row>
    )
}

export default Categroy
