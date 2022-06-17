import { useParams } from "react-router-dom"
import Application from "../ListTripsPage/applicationPage/Application"
import ListPage from "./listPage/ListPage"

const ListTripspage = () => {
    const params = useParams()
    const page = params.page

    return (
        <>
            {page === "list"?<ListPage /> : <Application />}
        </>
    )
}

export default ListTripspage