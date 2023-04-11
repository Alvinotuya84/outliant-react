import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'

type Props = {}

export default function Home({}: Props) {
  return (
    <div >
        <Row className='py-5'>
            <Col md="6">
            <h1>Lorem ipsum dolor sit amet consectetur</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque explicabo eum inventore dicta delectus optio amet, unde vitae perferendis ex doloribus illo nihil voluptas, temporibus, distinctio aperiam nam veritatis accusamus.</p>

            <Button variant="dark">Call to Action</Button> <Button variant="outline-dark">See Workspace</Button>
            </Col>
            <Col md="4">
                <div className='right-container d-flex justify-content-end'>

                <div className="float-right-container"></div>
                </div>
            </Col>
        </Row>

        <Row className='py-5'>
            <Col className='py-5' md="4">
                <h4>Header Text</h4>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti a aut odio! Eum, facere possimus eaque quo illum ex, facilis totam, ad exercitationem fugiat perferendis rerum. Incidunt dicta animi totam.</p>
            </Col>
            <Col className='py-5' md="4">
                <div className='right-container d-flex justify-content-end'>

                </div>
            </Col>
            <Col className='py-5 justify-content-flex-end' md="4">
                <h4>Header Text</h4>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti a aut odio! Eum, facere possimus eaque quo illum ex, facilis totam, ad exercitationem fugiat perferendis rerum. Incidunt dicta animi totam.</p>
            </Col>
        </Row>
        <Row className='py-3'>
            <Col className='py-3' md="4">
                <div className='right-container d-flex justify-content-end'>

                </div>
            </Col>
            <Col className='py-3 justify-content-flex-end' md="4">
                <h4>Header Text</h4>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti a aut odio! Eum, facere possimus eaque quo illum ex, facilis totam, ad exercitationem fugiat perferendis rerum. Incidunt dicta animi totam.</p>
                <Button variant="dark">Call to Action</Button> 
            </Col>
        </Row>
    </div>
  )
}