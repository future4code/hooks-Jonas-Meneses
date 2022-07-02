import { useState } from "react";

export const useInput = (valorInicial) =>{
    const [form, setForm] = useState(valorInicial)

    const onChange = (event) =>{
        const {name, value} = event.target

        setForm({...form, [name]:value})
    }

    const clear = () =>{
        setForm(valorInicial)
    }

    return {form, onChange, clear}
}