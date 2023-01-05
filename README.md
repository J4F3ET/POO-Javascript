# POO-Javascript
Polimorfismo -> se esta dando en el atributo clave  este atributo esd privado de las clases Cliente Empleado,
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