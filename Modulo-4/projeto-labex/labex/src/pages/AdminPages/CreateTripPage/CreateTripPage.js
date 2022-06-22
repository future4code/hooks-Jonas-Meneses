import {useProtected} from '../../../customHooks/useProtected'
import { goBack } from '../../../Coordinator'
import { useNavigate } from 'react-router-dom'



const CreatetripPage = () => {
    useProtected()
    const navigate = useNavigate()
    
    return (
        <>
            CreatetripPage
        <button onClick={() => { goBack(navigate) }}>voltar</button>

        </>
    )
}

export default CreatetripPage