type Cliente = {
    cliente: string,
    saldoTotal: number,
    debitos: number[]

}

let clientes: Cliente[] = [
    { cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
    { cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
    { cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
    { cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
    { cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
    { cliente: "Soter", saldoTotal: 1200, debitos: [] }
]

const calculaSaldo = (lista: Cliente[]): Cliente[] => {

    let debitos: number = 0
    let clientesDeb: Cliente[] = [...lista]

    for (const i of clientesDeb) {

        for (const e of i.debitos) {
            debitos += e
        }

        clientesDeb = clientesDeb.map((cli) => {
            if (cli.cliente === i.cliente) {
                return ({
                    ...cli,
                    saldoTotal: cli.saldoTotal - debitos,
                    debitos: []

                })

            } else {
                return cli
            }
        })

        debitos = 0
    }

    clientesDeb = clientesDeb.filter(cli => {
        return cli.saldoTotal <= 0
    })

    return clientesDeb

}

console.log(calculaSaldo(clientes)
)