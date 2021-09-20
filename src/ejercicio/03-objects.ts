/*
    ===== Código de TypeScript =====
*/

function sum (a: number, b: number): number{
    return a + b;
}

const result = sum (100, 200);

console.log(result);

const sumSimple = (a: number, b: number):number => a + b;

console.log(sumSimple(200,300));

interface PersonLOR{
    name: string,
    pv:number,
    viewHp: ()=> void;
}

function cure (person: PersonLOR, cureX: number):void {
    person.pv += cureX;
    console.log(person);
}

const newPerson: PersonLOR = {
    name: 'edwin',
    pv: 50,
    viewHp () {
        console.log ('Points life', this.pv);
    }
}
cure(newPerson, 20);

interface Address {
    street: string,
    pais: string,
    city: string
}

interface SuperHero{
    name: string,
    old: number,
    address: Address,
    viewAddress: ()=> string;

}

const superHero: SuperHero = {
    name: 'Superman',
    old: 30,
    address: {
        street: 'Main St',
        pais: 'USA',
        city: 'NY'
    },
    viewAddress (){
        return `${this.name} ${this.address.city} ${this.address.pais}`
    }
}
