/*
    ===== Código de TypeScript =====
*/

interface Passenger {
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: ' Fernando'
}

const passenger2: Passenger = {
    name: 'Melissa',
    children: ['Natalia','Gabriel']
}

function imprintChildren( passenger: Passenger): void{
    const countChildren = passenger?.children?.length || 'Sin hijos';
    console.log(countChildren);
}

imprintChildren(passenger1);
