let addCartas = (qt, array) =>{
   let i = 0
   let somaCartas = 0
   while(i<qt){
      array.push(comprarCarta())
      somaCartas += array[i].valor 
      i++
   }
}

let somarCartas = (array) =>{
   let somaCartas = 0
   for(let i in array){
      somaCartas += array[i].valor 
   }
   return somaCartas
}

let mensagem = (array) =>{
   let mensagem= "" 
   for(let i in array){
      mensagem += array[i].texto+" "
      
   }
   return mensagem
}

let condicao = confirm("Bem vindo ao jogo BlackJack \nVamos Jogar uma Rodada?")

while (condicao) {
   let cartasUsuario = []
   addCartas(2, cartasUsuario)
   
   let cartasPc = []
   addCartas(2, cartasPc)

   while(condicao){
      if ((cartasPc[0].texto === "A" && cartasPc[1].texto === "A") || (cartasUsuario[0].texto === "A" && cartasUsuario[1].texto === "A")) {
         console.log(`Jogador com dois A \n cartas do usuario${mensagem(cartasUsuario)} \n cartas do Computador ${mensagem(cartasPc)}`)
      }else{   
         let condicao2 = confirm(`suas cartas são ${mensagem(cartasUsuario)}.\n A carta revelada do Computador é ${cartasPc[0].texto}\n Deseja comprar mais uma carta?  `)

         if(condicao2){
            addCartas(1, cartasUsuario)
            console.log(somarCartas(cartasUsuario))
            if(somarCartas(cartasUsuario) > 21){
               alert(` Usuario-cartas ${mensagem(cartasUsuario)} - Pontuação: ${somarCartas(cartasUsuario)}\n Computador - Cartas: ${mensagem(cartasPc)} - Pontuação: ${mensagem(cartasPc)} \n Computador ganhou` )

               condicao = false
               condicao2 = false
            }else if(somarCartas(cartasUsuario) === 21){
               alert(` Usuario-cartas ${mensagem(cartasUsuario)} - Pontuação: ${somarCartas(cartasUsuario)}\n Computador - Cartas: ${mensagem(cartasPc)} - Pontuação: ${somarCartas(cartasPc)} \n Usuario ganhou ganhou!!!` )
               
               condicao = false
               condicao2 = false
            }
         }else{
            while(somarCartas(cartasPc)<somarCartas(cartasUsuario)){
               addCartas(1, cartasPc)
            }
            if(somarCartas(cartasPc) === somarCartas(cartasUsuario)){
               alert(`Usuario-cartas ${mensagem(cartasUsuario)} - Pontuação: ${somarCartas(cartasUsuario)}\n Computador - Cartas: ${mensagem(cartasPc)} - Pontuação: ${somarCartas(cartasPc)} \n Empate!!!`)}
            else if(somarCartas(cartasPc)<= 21){
               alert(` Usuario-cartas ${mensagem(cartasUsuario)} - Pontuação: ${somarCartas(cartasUsuario)}\n Computador - Cartas: ${mensagem(cartasPc)} - Pontuação: ${somarCartas(cartasPc)} \n Computador ganhou` )}
            else{
               alert(` Usuario-cartas ${mensagem(cartasUsuario)} - Pontuação: ${somarCartas(cartasUsuario)}\n Computador - Cartas: ${mensagem(cartasPc)} - Pontuação: ${somarCartas(cartasPc)} \n Usuario ganhou ganhou!!!` )
            }
            condicao = false
            condicao2 = false
         }  
      }
   }
   condicao = confirm("Vamos Jogar outra Rodada?")
}   