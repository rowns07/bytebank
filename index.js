import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js"

const cliente1 = new Cliente('Diego Souza', 36782951851);
const cliente2 = new Cliente('Camila Cardoso', 33366682551);

const contaCorrente = new ContaCorrente(1633, cliente1);
let valorDeposito = 150;
contaCorrente.depositar(valorDeposito);

const conta2 = new ContaCorrente(2, cliente2);


// let valor = 300;
// contaCorrente.transferir(valor, conta2);

// console.log('CONTA 1:', contaCorrente);
console.log(ContaCorrente.numeroDeContas)

