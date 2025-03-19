import { Auto } from "./auto";
let primerAuto= new Auto ("fiat", "toro", 2020);
let segundoAuto= new Auto ("ford", "focus", 2012);
let tercerAuto= new Auto ("chevrolet", "corsa", 2008);

console.log(`El auto ${primerAuto.marca} modelo ${primerAuto.modelo} año ${primerAuto.anio}`);
primerAuto.acelerar();
console.log("-----------------------------------------------------");

console.log(`El auto ${segundoAuto.marca} modelo ${segundoAuto.modelo} año ${segundoAuto.anio}`);
segundoAuto.frenar();
console.log("-----------------------------------------------------");

console.log(`El auto ${tercerAuto.marca} modelo ${tercerAuto.modelo} año ${tercerAuto.anio}`);
tercerAuto.acelerar();
tercerAuto.acelerar();





