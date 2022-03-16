import { Cliente } from "./Cliente.js"
import { Diretor } from "./Funcionario/Diretor.js"
import { Gerente } from "./Funcionario/Gerente.js"
import { SistemaAutenticacao } from "./SistemaAutenticacao.js"

const diretor = new Diretor("Rodrigo", 10000, 12345678900);
diretor.cadastrarSenha("123456");
const gerente = new Diretor("Ricardo", 5000, 12347896600);
gerente.cadastrarSenha("123456789");

const cliente = new Cliente("Lais","1234567900","456")

const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123456789");


const clienteEstaLogado = SistemaAutenticacao.login(cliente, "456");

console.log(diretorEstaLogado,gerenteEstaLogado);
console.log(clienteEstaLogado);