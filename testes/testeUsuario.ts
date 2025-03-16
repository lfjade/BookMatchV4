import { Usuario } from "../src/Classes/Usuario";

// Criando usuários de teste
const user1 = new Usuario("Alice", "alice123", "123.456.789-09", "senha123", false);
const user2 = new Usuario("Bob", "bob", "987.654.321-00", "senha456", true);
const user3 = new Usuario("Carlos", "alice123", "123.456.789-09", "senha789", false); // Deve falhar (repetição)

// Testando busca por username
console.log(Usuario.procuraUsuarioUsername("alice123")); // Deve encontrar Alice
console.log(Usuario.procuraUsuarioUsername("BOB")); // Deve encontrar Bob (case insensitive)
console.log(Usuario.procuraUsuarioUsername("nao_existe")); // Deve retornar null

// Testando busca por CPF
console.log(Usuario.procuraUsuarioCpf("12345678909")); // Deve encontrar Alice
console.log(Usuario.procuraUsuarioCpf("98765432100")); // Deve encontrar Bob
console.log(Usuario.procuraUsuarioCpf("00000000000")); // Deve retornar null

// Verificando se a listaUsuarios está correta
console.log(Usuario.listaUsuarios);
