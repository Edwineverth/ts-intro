/*
    ===== Código de TypeScript =====
*/

let ability: (boolean | string | number ) [] = ['bash', 'counter', 'healing']


interface Person {
    name: string,
    hp: number,
    ability: string [],
    hometown? : string
}
//
// const person: Person = {
//     name: 'Strider',
//     hp: 100,
//     ability: ['bash', 'counter', 'healing']
// }
// person.hometown = 'New Your'
//
// console.table(person);
