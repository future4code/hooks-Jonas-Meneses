import { useNavigate } from "react-router-dom"
import { ContainerApplication } from "./StyledApplication"
import { useGetTrips } from "../../../Hooks/useGetTrips"
import { useGetCountries } from "../../../Hooks/useGetCountries"
import { goBack } from '../../../routers/Coordinator'
import { useInput } from "../../../Hooks/useInput"
import { useState } from "react"
import axios from "axios"


const Application = () => {

    const navigate = useNavigate()

    const getTrips = useGetTrips()

    const getcountries = useGetCountries()

    const paises = getcountries.map(paises => {
        return paises.nome_pais
    })

    const [viagem, setViagem] = useState('')

    const onChangeViagem = (event) =>{
        setViagem(event.target.value)
    }

    const { form, onChange, clear } = useInput({
        "name": "",
        "age": '',
        "applicationText": "",
        "profession": "",
        "country": ""
    })

    const onClickApplication = (event) => {

        event.preventDefault();
        console.log(viagem)
        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/jonas-meneses-hooks/trips/${viagem}/apply`, form)
            .then(resp => {
                console.log(resp)
                alert("Escrição enviada")
                clear()
            })
            .catch(err => {
                console.log(err)
                alert("deu ruim")

            })
    }
    console.log(form)
    return (
        <ContainerApplication>
            Formulario de cadastro
            <section>
                <form onSubmit={onClickApplication}>
                    <select
                        onChange={onChangeViagem}
                        value={viagem}
                       
                    >
                        <option value='' disabled >Escolha uma viagem</option>
                        {getTrips.map(opt => {
                            return (
                                <option key={opt.id} value={opt.id} >{opt.name}</option>
                            )
                        })}
                    </select>


                    <input type="text"
                        placeholder="Nome"
                        value={form.name}
                        onChange={onChange}
                        name="name"
                        required
                    />
                    <input type="number"
                        placeholder="Idade"
                        value={form.age}
                        onChange={onChange}
                        name="age"
                        required
                    />
                    <input type="text"
                        placeholder="Texto de inscrição"
                        value={form.applicationText}
                        onChange={onChange}
                        name="applicationText"
                        required
                    />
                    <input type="text"
                        placeholder="Profição"
                        value={form.profession}
                        onChange={onChange}
                        name="profession"
                        required
                    />

                    <select
                        onChange={onChange}
                        value={form.country}
                        name="country"
                        required
                    >

                        <option
                            disabled
                            value=''
                        >Escolha um País</option>
                        {paises.map(paises => {
                            return (
                                <option>{paises}</option>
                            )
                        })}
                    </select>

                    <button>Aplicar-se</button>
                    <button onClick={() => goBack(navigate)}>Votar</button>
                </form>
            </section>


        </ContainerApplication >
    )
}

export default Application