import { Cliente } from "./Cliente.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js"

const diretor = new Diretor("Diego", 10000, 36782951851);
diretor.cadastrarSenha('123456789');
const gerente = new Gerente("Wesley", 5000, 11111111111);
gerente.cadastrarSenha('123');

const cliente = new Cliente('Edilson',55555555555, "1234");

const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456789")
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123")
const clieneEstaLogado = SistemaAutenticacao.login(cliente, "12345")


console.log(diretorEstaLogado , gerenteEstaLogado,clieneEstaLogado);