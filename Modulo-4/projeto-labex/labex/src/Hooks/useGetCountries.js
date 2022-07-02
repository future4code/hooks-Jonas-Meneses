import axios from "axios";
import { useState, useEffect } from "react";

export const useGetCountries = () =>{
    const [getcountries, setgetCountries ] = useState([])
    
    useEffect(()=>{
     axios("https://gist.githubusercontent.com/jonasruth/61bde1fcf0893bd35eea/raw/10ce80ddeec6b893b514c3537985072bbe9bb265/paises-gentilicos-google-maps.json").then(resp =>{
        setgetCountries(resp.data)
    })},[])

    return getcountries
}