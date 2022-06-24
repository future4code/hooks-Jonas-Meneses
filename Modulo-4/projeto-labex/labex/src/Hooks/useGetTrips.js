import axios from "axios";
import { useState, useEffect } from "react";

export const useGetTrips = () =>{
    const [tripList, setTripList] = useState([])
    useEffect(()=>{
        axios("https://us-central1-labenu-apis.cloudfunctions.net/labeX/jonas-meneses-hooks/trips").then(resp =>{
            setTripList(resp.data.trips)
        })
    }, [])

    return tripList
}

