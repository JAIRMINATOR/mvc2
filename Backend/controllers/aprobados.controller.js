import { aprobado_model } from "../models/aprobados.model.js";

export const test3 = ()=>{
    console.log("Llamando la tercera collecion")
}

aprobado_model.create({
    name:"Pedro",
    apepat:"Gutierrez",
    apemat:"Lopez",
    promedio:9.5
})