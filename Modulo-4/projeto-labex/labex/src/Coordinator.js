import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export const goBack = (navigate) => {
    navigate(-1)


}