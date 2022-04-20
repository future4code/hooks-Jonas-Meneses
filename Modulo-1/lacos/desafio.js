//** NÃO ESQUECA DE LINKAR ESSE SCRIPT NO INDEX.HTML**

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
//  Desafio
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

let condicao1 = true
while(condicao1){
    let jogador1 = Number(prompt("*** Jogador 1 ***\n digite um numero:"))

    let jogador2 = Number(prompt("*** VAMOS JOGAR! *** \nChute um numero:"))

    let tentativas = 1
    let condicao2 = true
    while(condicao2){
        if(jogador1 === jogador2){
            alert(`O número chutado foi: ${jogador2} \n
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
            if(jogador2>jogador1){
                jogador2 = Number(prompt(`O número chutado foi: ${jogador2}\n Errrrrrrrou, é menor`))
            }else{
                jogador2 = Number(prompt(`O número chutado foi: ${jogador2}\n Errrrrrrrou, é maior`))
            }
        }
        tentativas++
    }
}
alert("#### FIM DO JOGO ####")