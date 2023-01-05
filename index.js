/*Importación de clases*/
import {Cliente} from './Cliente.js'
import {CuentaCorriente} from './Cuentas/CuentaCorriente.js';
import { CuentaAhorro } from './Cuentas/CuentaAhorro.js';
import { CuentaNomina } from './Cuentas/CuentaNomina.js';
import { Empleado } from './Empleados/Empleado.js';
import { Director } from './Empleados/Director.js';
import { Gerente } from './Empleados/Gerente.js';
import { SistemaASutenticacion } from './SistemaASutenticacion.js';
/*Polimorfismo -> se esta dando en el atributo clave  este atributo esd privado de las clases Cliente Empleado,
pero al tenmer polimorfismo con el Login, se puede usar sin importar la naturaleza 
del objeto. Esto se logra ya que el atributo #clave tiene las funciones en las clases Cliente y Empleado,
se llaman igual los metodos;

Abstraccion se esta usando en las clases de Cuentas tenemos la super clase cuenta la cueal no 
se instancia claciuas al "if" del constructor permitiendo no intanciar la clase y volviendola abtracta.

La herencia se usa con la palabra reservada "extends"

Recuerde usar el encapsulamiento de atributos y evitar acceder a ellos desde afuera

Se pude preguntar si en una interfaz existe un metodo con ejemplo : 
if("autenticable" in Usuario) OJO esto tambien detecta atributos por ende si se tiene
un atributo con ese mismo nombre dara TRUE, para definir que solo detecte Funciones o metodos se deberia usar :
 if( "autenticable" in usuario && usuario.autenticable instanceof Function)
*/
const cliente = new Cliente('Leonardo','13804050','123224');
const cliente2 = new Cliente('María','16979808','8989');

const cuentaDeLeonardo = new CuentaCorriente('Corriente',cliente, '1', '001');
const cuentaDeMaria = new CuentaCorriente('Corriente',cliente2,'2','002');
const CuentaAhorroLeonardo = new CuentaAhorro('Ahorro',cliente,'9985','001',0);
const CuentaNominaLeonardo = new CuentaNomina('Ahorro',cliente,'9985','001',120);

const empleado =  new Empleado('Juan','12345',15000);
const empleado2 =  new Director('Marta','132345',15000);
const empleado3 = new Gerente('Pedro','234321',15000);
console.log(empleado);
console.log(empleado.verBonificacion());
console.log(empleado2.verBonificacion());
console.log(empleado3.verBonificacion());

console.log(SistemaASutenticacion.login(empleado2,'123'));
empleado.asignarClave('123');
console.log(SistemaASutenticacion.login(empleado,'123'));
cliente.asignarClave('1231')
console.log(SistemaASutenticacion.login(cliente,'1231'));
console.log(SistemaASutenticacion.login(empleado3,'123'));






