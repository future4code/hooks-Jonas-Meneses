const  listaDeTarefas = ["lavar o carro", "Varrer a casa", "Fazer o exercicio de Node"]

const novaTarefa = process.argv[2]

listaDeTarefas.push(novaTarefa)

console.table(listaDeTarefas)