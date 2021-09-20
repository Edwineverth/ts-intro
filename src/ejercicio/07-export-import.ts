/*
    ===== Código de TypeScript =====
*/


import {calculatorISV, Product} from "./06-destructuring-args";

const carBuy:  Product[] = [
    {
        description:'Telefono 1',
        buy: 100
    },
    {
        description: 'Telefono 2',
        buy: 150
    }
];

const [ total, isv] = calculatorISV(carBuy);

console.log('Total', total);
console.log ('ISV', isv)

