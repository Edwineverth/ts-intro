const removeFields = (obj, fieldUndefined: boolean = true, fieldNull: boolean = true, fieldEmpty: boolean = true) => Object.keys(obj).forEach(key => ((obj[key] === undefined && fieldUndefined) || (obj[key] === null && fieldNull) || (obj[key] === '' &&  fieldEmpty)) && delete obj[key])

const obj = {
    name: 'edwin',
    cosa: undefined,
    cosa2: '',
    cosa3: null
}

removeFields(obj , false, false);

const prueba2: string = obj.cosa;
console.log(prueba2)
interface Obj {
    name: string,
    cosa?: string,
    cosa2?: string,
    cosa3?: string
}



function prueba (obj: Obj){
    return obj
}

console.log(prueba(obj))
