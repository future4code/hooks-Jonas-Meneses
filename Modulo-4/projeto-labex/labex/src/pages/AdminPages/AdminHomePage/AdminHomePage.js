import {useProtected} from '../../../customHooks/useProtected'

const AdminHomePage = () =>{
    useProtected()
    return(
        <> AdminHomePage!</>
    )
}

export default AdminHomePage