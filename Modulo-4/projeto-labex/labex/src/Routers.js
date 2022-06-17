import {BrowserRouter , Route , Routes } from "react-router-dom";
import HomePage from "./pages/UserPages/homePage/HomePage"
import AdminHomePage from "./pages/AdminPages/AdminHomePage/AdminHomePage"
import ApplicationFormPage from "./pages/AdminPages/ApplicationFormPage/ApplicationFormPage"
import CreatetripPage from "./pages/AdminPages/CreateTripPage/CreateTripPage";
import ListTripspage from "./pages/UserPages/ListTripsPage/ListTripspage";
import LoginPage from "./pages/AdminPages/LoginPage/LoginPage";
import TripDetailsPage from "./pages/AdminPages/TripDetailsPage/TripDetailsPage";

const Routers = () =>{
    return(
        <>
        <BrowserRouter>
            <Routes>

                <Route index element={<HomePage />}  />
                
                <Route path="/adminHomePage" element={<AdminHomePage />} />
                <Route path="/applicationFormPage" element={<ApplicationFormPage />} />
                <Route path="/createtripPage" element={< CreatetripPage />} />
                <Route path="/trips/:page" element={<ListTripspage />} />
                <Route path="/loginPage" element={<LoginPage />} />
                <Route path="/tripDetailsPage" element={<TripDetailsPage />} />

            </Routes>
        </BrowserRouter>
        </>
    )
}

export default Routers