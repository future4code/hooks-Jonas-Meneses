import {BrowserRouter , Route , Routes } from "react-router-dom";
import HomePage from "../pages/UserPages/homePage/HomePage"
import CreatetripPage from "../pages/AdminPages/CreateTripPage/CreateTripPage";
import LoginPage from "../pages/AdminPages/LoginPage/LoginPage";
import TripDetailsPage from "../pages/AdminPages/TripDetailsPage/TripDetailsPage";
import ErrorPage from "../pages/ErrorPage/ErroPage";
import TripListAdmin from "../pages/AdminPages/tripListAdmin/TripListAdmin";
import ListPage from "../pages/UserPages/ListTripsPage/listPage/ListPage";
import Application from "../pages/UserPages/applicationPage/Application";

const Routers = () =>{
    return(
        <>
        <BrowserRouter>
            <Routes>

                <Route index element={<HomePage />}  />
                
                <Route path="/admin/trips" element={<TripListAdmin />} />
                <Route path="/admin/trip/:idviagem" element={<TripDetailsPage />} />
                <Route path="/applicationtrip" element={<Application />} />
                <Route path="/createtripPage" element={< CreatetripPage />} />
                <Route path="/trips" element={<ListPage />} />
                <Route path="/loginPage" element={<LoginPage />} />
                <Route path="*" element={< ErrorPage />}/>
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default Routers