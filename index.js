/*Importación de clases*/
import { Cuenta } from './Cuenta.js';
import {Cliente} from './Cliente.js'
import {CuentaCorriente} from './CuentaCorriente.js';
import { CuentaAhorro } from './CuentaAhorro.js';
import { CuentaNomina } from './CuentaNomina.js';

const cliente = new Cliente('Leonardo','13804050','123224');
const cliente2 = new Cliente('María','16979808','8989');
const cuentaDeLeonardo = new CuentaCorriente('Corriente',cliente, '1', '001');
const cuentaDeMaria = new CuentaCorriente('Corriente',cliente2,'2','002');
const CuentaAhorroLeonardo = new CuentaAhorro('Ahorro',cliente,'9985','001',0);
const CuentaNominaLeonardo = new CuentaNomina('Ahorro',cliente,'9985','001',120);
console.log(cuentaDeLeonardo.verSaldo());
cuentaDeLeonardo.depositoEnCuenta(150);
console.log(cuentaDeLeonardo.verSaldo());
cuentaDeLeonardo.retirarDeCuenta(50)
console.log(cuentaDeLeonardo.verSaldo());
console.log(CuentaAhorroLeonardo);
console.log(CuentaNominaLeonardo);






