import { Cliente } from "./Cliente.js";

export class Conta {


    constructor(saldoInicial, cliente, agencia) {
        if (this.constructor == Conta) {
            throw new Error('Vc não deveria instanciar diretamente a conta');
        }

        this._saldo = saldoInicial;
        this.cliente = cliente;
        this.agencia = agencia;

    }



    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    }

    get cliente() {
        return this._cliente
    }



    get saldo() {
        return this._saldo;
    }


    depositar(valor) {

        this._saldo += valor;
    };

    transferir(valor, conta) {

        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    };

    teste() {
        console.log('Teste na classe conta');
    };

    sacar(valor) {
        throw new Error('Metodo sacar da conta é abstrato');
    }

    _sacar(valor, taxa) {
        const valorSacado = taxa * valor;
        if (this._saldo >= valorSacado) {
            this._saldo -= valorSacado
            return valorSacado;
        }
        return 0;
    }

}