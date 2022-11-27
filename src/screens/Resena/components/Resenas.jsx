


import React from "react";

import { Form, FormGroup} from 'react-bootstrap'

const Resenas = (props) => { 

    return <Form>
        <FormGroup>
            <Form.Label>
        {
            props.resenas.map((resena) => {
                return <div key={resena.id} value={resena.id}>
                    { resena.comentario } 
                     </div>
            })
        }
        </Form.Label>
        </FormGroup>
    </Form>
}

export default Resenas