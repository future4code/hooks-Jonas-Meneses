import Trip from "./Trip"
import { useNavigate } from "react-router-dom"
import { ContainerTripList } from "./styledTripList"

const ListPage = () => {
    const navigate = useNavigate()

    const goToApplication = () => {
        navigate('/applicationtrip')
    }

    const goBack = () => {
        navigate(-1)
    }

    return (
        <ContainerTripList>
            Lista de Viagens
            <div className="containerButton">
                <button onClick={goToApplication}> Inscrever</button>
                <button onClick={goBack}>Votar</button>
            </div>
            
            <div className="containerTrips">
                <Trip />
            </div>


        </ContainerTripList>
    )
}

export default ListPage