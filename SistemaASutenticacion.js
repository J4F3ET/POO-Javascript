export class SistemaASutenticacion{
    static login(usuario,clave){
        if("autenticable" in usuario && usuario.autenticable instanceof Function)
            return usuario.autenticable(clave);
        return false;
    }
}