/*Crear una clase Auto con atributos (marca, modelo, anio).
Agregar métodos (constructor(), acelerar(), frenar()).
Instanciar objetos y probar métodos*/

import * as rs from "readline-sync";
export class Auto{
    marca: string;
    modelo: string;
    anio: number;
    velocidad: number=0

    constructor(pMarca:string, pModelo: string, pAnio:number){
        this.marca= pMarca;
        this.modelo= pModelo;
        this.anio= pAnio;
    }

    acelerar(): void {
        let incremento: number =0;
        while (incremento<=0) {
            incremento= rs.questionInt ("Ingrese velocidad mayor a cero: ")
            
        }
        this.velocidad += incremento;
        console.log(`Ha acelerado y ahora va a ${this.velocidad} km/h`);
         
    }


    frenar(): void {
        this.velocidad = 0;
        console.log(`Ha frenado y está detenido.`);


    }
}