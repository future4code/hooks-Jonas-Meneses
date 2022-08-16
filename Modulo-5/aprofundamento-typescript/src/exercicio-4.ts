
// no terminal damos o comando tsc para transpilar os os arquivos Ts da pasta src para Js na pasta build*, ou podemos criar um scrit o package.jason: "start": "tsc && node ./caminho-do-arquivo"
//*as cofigurações do tsconfig outDir e rootDir tem q está habilitado

//se quiser transpilar um arquivo especifico usa o tsc arquivo.ts 



type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}