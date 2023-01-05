import { Empleado } from "./Empleado.js";
export class Director extends Empleado {

    constructor(nombre,dni,salario){
        super(nombre,dni,salario);
    }
    verBonificacion(){
        return super._verBonificacion(10);
    }
}