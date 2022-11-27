import { useEffect, useState} from 'react'
import { Container } from 'react-bootstrap'
import Resenas from './components/Resenas'


const ResenaPagina = () => {

    const [listadoResenas, setListadoResenas] = useState([])


    const httpObtenerResenas = async () => {
        const resp =  await fetch("http://localhost:4447/resena") 
        const data = await resp.json()
        console.log(data)
        setListadoResenas(data)

    }
    useEffect(() => {
        httpObtenerResenas();
    }, [])


    return <Container>
        <h1>User reviews</h1>

        <h3>Global rate: </h3>

        
         { () => <div>
        <Resenas resenas={ listadoResenas }

        />
        </div>
        } 
        

    </Container>
}

export default ResenaPagina