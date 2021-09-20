/*
    ===== Código de TypeScript =====
*/

    class PersonNormal{
        constructor (
            public name: string,
            public address: string
        ){}
    }

    class Hero extends PersonNormal{
        constructor(
            public alterEgo: string,
            public old?: number,
            public nameReally?: string,
        ) {
            super(nameReally, 'New York');
        }

        imprintName(){
            return this.alterEgo + this.nameReally;
        }
    }

interface Person {
    alterEgo: string;
    old: number;
    nameReally: number;
    imprintName: ()=> string;
}

const ironman = new Hero ('Ironman');
ironman.old = 50;
console.log(ironman);
