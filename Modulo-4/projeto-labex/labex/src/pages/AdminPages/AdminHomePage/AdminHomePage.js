import { useProtected } from '../../../customHooks/useProtected'
import TripListAdmin from '../tripListAdmin/TripListAdmin'

import { useParams } from 'react-router-dom'
import CreatetripPage from '../CreateTripPage/CreateTripPage'

const AdminHomePage = () => {
    useProtected()
    const params = useParams()
    const page = params.page
    let showPage = ''

    switch (page) {
        case "listtrips":
            showPage = <TripListAdmin />
            break;
        case "createTrip":
            showPage = <CreatetripPage />
            break;

        default:
            break;
    }

    

    return (
        <>
            AdminHomePage!
            <br />
           
            <br />
            {showPage}
        </>

    )
}

export default AdminHomePage