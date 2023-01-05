export class Cuenta{
    #cliente;
    #saldo;
    constructor(cliente,numero,agencia,saldo){
        if(this.constructor == Cuenta){
            throw new Error("No se permite intaciar una clase Cuenta");
        }
        this.numero=numero;
        this.agencia=agencia;
        this.#saldo=saldo;
        this.#cliente=cliente;

    }
    set cliente(valor) {
        if (valor instanceof Cliente)
            this.#cliente = valor;
    }
    get cliente() {
        return this.#cliente;
    }
    depositoEnCuenta(valor) {
        if (valor > 0)
            this.#saldo += valor;
        return this.#saldo;
    }
    retirarDeCuenta(valor) {
        if (valor <= this.#saldo)
            this.#saldo -= valor;
        return this.#saldo;
    }
    verSaldo() {
        return this.#saldo;
    }
    transferirParaCuenta(valor,cuentaDestino) {
        this.retirarDeCuenta(valor);
        cuentaDestino.depositoEnCuenta(valor);
        valor = 200;
        valor = valor*1000;
    }
}