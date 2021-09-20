/*
    ===== Código de TypeScript =====
*/

export interface Product {
    description: string;
    buy: number;
}

const phone: Product = {
    description: 'Nokia',
    buy: 150,
}
const tablet: Product = {
    description: 'iPad Air',
    buy: 350,
}

export function calculatorISV ( products: Product []): [number, number] {
    let total = 0;
    products.forEach (({buy})=> {
        total+= buy;
    });
    return [total, total * 0.15];
};

const articles = [phone, tablet];

const [total, isv] = calculatorISV(articles);

//console.log('Total', total)
//console.log('ISV', isv)
