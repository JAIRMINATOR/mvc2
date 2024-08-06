import { reprobados_model } from "../models/reporobados.model.js";

export const test = ()=>{
    console.log('Trallendo la funcionalidad del modelo')
}
reprobados_model.create({
    name:"paco",
    apepat:"Hernandez",
    apemat:"Martinez",
    promedio:7.5
})