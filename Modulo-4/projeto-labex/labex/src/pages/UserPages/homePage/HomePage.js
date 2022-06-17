import { useNavigate } from "react-router-dom"
import { ContainerHomePage } from "./StyledHomePage"


const HomePage = () => {
    const navegate = useNavigate()

    const goToTrips = () => {
        navegate("/trips/list")
    }

    const goToAdmin = () => {
        navegate("/loginPage")
    }

    return (
        <ContainerHomePage>

            <div className="container" >
                <h1>LabeX</h1>
                <section>
                    <button onClick={goToTrips}> Ver Viagens </button>
                    <button onClick={goToAdmin}> Area Administrativa </button>
                </section>
            </div>
        </ContainerHomePage>
    )
}

export default HomePage