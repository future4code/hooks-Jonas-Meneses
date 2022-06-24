import {useProtected} from '../../../Hooks/useProtected'
import { useParams } from 'react-router-dom'
import CardDetails from './CardDetails'

const TripDetailsPage = (props) => {
    useProtected()
    const params = useParams()
    const idPage = params.idviagem

    return (
        <>
            <CardDetails id={idPage} />
        </>
    )
}

export default TripDetailsPage