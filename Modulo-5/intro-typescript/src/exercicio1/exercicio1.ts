
const a: number = Number(process.argv[2])
const b: number = Number(process.argv[3])
const c: number = Number(process.argv[4])

function checaTriangulo(a: number, b: number, c: number) {
    if (a !== b && b !== c) {
        return console.log("Escaleno");
    } else if (a === b && b === c) {
        return console.log("Equilátero");
    } else {
        return console.log("Isósceles");
    }
}

checaTriangulo(a,b,c)