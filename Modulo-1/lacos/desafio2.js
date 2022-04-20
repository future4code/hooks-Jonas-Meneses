//** NÃO ESQUECA DE LINKAR ESSE SCRIPT NO INDEX.HTML**

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
//  Desafio 2
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

let condicao1 = true
while(condicao1){
    let computador = Math.floor(Math.random()*100)

    let usuario = Number(prompt("*** VAMOS JOGAR! *** \nChute um numero:"))

    let tentativas = 1
    let condicao2 = true
    while(condicao2){
        if(computador === usuario){
            alert(`O número chutado foi: ${usuario} \n
            Acertou!! \n O número de tentativas foi: ${tentativas}
            `)
            
            let confirmar = confirm("vamos Jogar outra rodada?")
    
            if(confirmar){
                condicao2 = false
            }else{
                condicao1 = false
                condicao2 = false
            }
        }else{
            if(usuario>computador){
                usuario = Number(prompt(`O número chutado foi: ${usuario}\n Errrrrrrrou, é menor`))
            }else{
                usuario = Number(prompt(`O número chutado foi: ${usuario}\n Errrrrrrrou, é maior`))
            }
        }
        tentativas++
    }
}
alert("#### FIM DO JOGO ####")


// 
