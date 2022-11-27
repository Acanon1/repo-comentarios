import { useState } from 'react'
import { Card, Form, Button, Container, Row, Col } from 'react-bootstrap'

const RegistrarPagina = (props) => {
    
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [correo, setCorreo] = useState("")
    const [contrasena, setContrasena] = useState("")

    const httpguardarUsuario = async (nombre, apellido , correo , contrasena) => {
        const data = {
            nombre : nombre,
            apellido : apellido,
            correo : correo,
            contrasena : contrasena

        }
        const resp = await fetch(`http://localhost:4447/usuarios`,
            {
                method : "POST",
                body : JSON.stringify(data),
                headers : {
                    "content-Type" : "application/json"
                }
            }
        )
        const dataResp = await resp.json()
        console.log(dataResp)
        if (dataResp.error !== "") {
            console.error(dataResp.error)
        }

        
    }
    const guardarUsuario = (nombre , apellido , correo , contrasena) => {console.log(
        `nombre: ${nombre} apellido: ${apellido} correo: ${correo} password: ${contrasena}`)
        httpguardarUsuario(nombre , apellido , correo , contrasena)
    }
    return <Container >
        <Row className='mt-4'>
            <Col></Col>
            <Col>
                <Card >
                    <Card.Body >
                        <h1>Registrarse</h1>
                  
                        <Form>
                            <Form.Group>
                                <Form.Label>
                                    Nombre
                                </Form.Label>
                                <Form.Control type='text' value={ nombre } onChange={ (evt) => {setNombre(evt.target.value)}}/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>
                                    Apellido
                                </Form.Label>
                                <Form.Control type='text' value={ apellido } onChange={(evt) => {setApellido(evt.target.value)}}/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>
                                    Correo
                                </Form.Label>
                                <Form.Control type='text' value={ correo} onChange={(evt) => {setCorreo(evt.target.value)}}/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>
                                    Password
                                </Form.Label>
                                <Form.Control type='text' value={contrasena} onChange={(evt) => {setContrasena(evt.target.value)}}/>
                            </Form.Group>
                            <Button className='mt-3' variant='warning' type='button' onClick={ () => {
                                guardarUsuario(nombre, apellido, correo , contrasena )
                            }}>Registrarse</Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Col>
            <Col></Col>
        </Row>
    </Container>
}

export default RegistrarPagina