/*
    ===== Código de TypeScript =====
*/

interface Player {
    volume: number,
    second: number,
    song: string,
    detail: Detail
}

interface Detail {
    author: string,
    year: number
}

const player: Player = {
    volume: 90,
    second: 36,
    song : 'Mess',
    detail: {author: 'Jose', year:2030}
}

const {volume, second, song, detail:{author}} = player


console.log(`El volumen actual es de ${volume}`);
console.log(`El second actual es de ${second}`);
console.log(`El song actual es de ${song}`);
console.log(`El detail actual es de ${author}`);
