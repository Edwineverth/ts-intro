/*
    ===== Código de TypeScript =====
*/

function whatTypeAmI<T>(args: T){
    return args;
}

let iAmString = whatTypeAmI('Hola mundo');
let iAmNumber = whatTypeAmI(100);
let iAmArray = whatTypeAmI([1,2,3,4,5,6,7,8,9]);

let iAmExplicit = whatTypeAmI<number>(100)

