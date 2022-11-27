import { Container, Row, Col, Button, Form} from "react-bootstrap"

const Newsletter = () => {
    return <Container>
        <Row>
            <Col><h3> sign up to our newsletter</h3>
                <Row>
                    <Col>
                    <Form >
                        <Form.Group>
                                <Form.Label >
                                    Password
                                </Form.Label>
                                <Form.Control type='text'/>
                            </Form.Group>
                            <Button className='mt-3' variant='warning' type='button'>
                Subscribe
            </Button>
            </Form>
                    </Col>
                </Row>
            </Col>
            <Col>
                <Row>
                    <Col>
                    Build your PC</Col>
                    <Col>Good.</Col>
                    <Col>terms & conditions</Col>
                </Row>
                <Row>
                    <Col>
                    Why redux</Col>
                    <Col>Better.</Col>
                    <Col>Privacy policy</Col>
                </Row>
                <Row>
                    <Col>
                    Support</Col>
                    <Col>Best.</Col>
                    <Col>Refund policy</Col>
                </Row>
            </Col>
        </Row>


    
    </Container>
}
export default Newsletter;