import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'

type Props = {}

export default function Home({}: Props) {
  return (
    <div>
        <Row>
            <Col md="6">
            <h1>Lorem ipsum dolor sit amet consectetur</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque explicabo eum inventore dicta delectus optio amet, unde vitae perferendis ex doloribus illo nihil voluptas, temporibus, distinctio aperiam nam veritatis accusamus.</p>

            <Button variant="dark">Call to Action</Button> <Button variant="outline-dark">See Workspace</Button>
            </Col>
            <Col md="6">
                <div className='right-container'></div>
            </Col>
        </Row>
    </div>
  )
}