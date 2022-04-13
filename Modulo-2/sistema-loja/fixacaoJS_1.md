function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
    let comicao = qtdeCarrosVendidos * 100
    let valorVendas = valorTotalVendas * 0.05
    let salario = comicao + valorVendas + 2000
    return salario
}