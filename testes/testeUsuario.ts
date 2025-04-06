import { Usuario } from "../src/Models/Usuario";
import { UsuarioErros } from "../src/utils/";

// Função auxiliar para imprimir os testes
function assert(condicao: boolean, descricao: string) {
    if (condicao) {
        console.log(`✅ SUCESSO - ${descricao}`);
    } else {
        console.error(`❌ FALHOU - ${descricao}`);
    }
}

// Resetando os dados antes de cada teste 
function resetarUsuarios() {
    Usuario["listaUsuarios"] = [];
    Usuario["contadorId"] = 1;
}

// -------------------- TESTES --------------------

function testeCadastroUsuario() {
    resetarUsuarios();

    const usuario = new Usuario("Jade", "jadezin", "12345678900", "senha123", false);
    const resultado = Usuario.registrarUsuario(usuario);

    assert(resultado.sucesso === true, "Deve cadastrar um novo usuário com sucesso");
    assert(Usuario["listaUsuarios"].length === 1, "A lista de usuários deve conter um usuário");
}

function testeUserNameDuplicado() {
    resetarUsuarios();

    const usuario1 = new Usuario("Jade", "jadezin", "12345678900", "senha123", false);
    const usuario2 = new Usuario("Outra Jade", "jadezin", "09876543210", "senha456", false);

    Usuario.registrarUsuario(usuario1);
    const resultado = Usuario.registrarUsuario(usuario2);

    assert(resultado.sucesso === false, "Deve impedir cadastro com username duplicado");
    assert(resultado.erro === UsuarioErros.USERNAME_DUPLICADO, "Deve retornar erro de USERNAME_DUPLICADO");
}

function testeCpfDuplicado() {
    resetarUsuarios();

    const usuario1 = new Usuario("Jade", "jadezin", "12345678900", "senha123", false);
    const usuario2 = new Usuario("Outra Jade", "jadezin2", "12345678900", "senha456", false);

    Usuario.registrarUsuario(usuario1);
    const resultado = Usuario.registrarUsuario(usuario2);

    assert(resultado.sucesso === false, "Deve impedir cadastro com CPF duplicado");
    assert(resultado.erro === UsuarioErros.CPF_DUPLICADO, "Deve retornar erro de CPF_DUPLICADO");
}

function testeDelecaoUsuario() {
    resetarUsuarios();

    const usuario = new Usuario("Jade", "jadezin", "12345678900", "senha123", false);
    Usuario.registrarUsuario(usuario);

    const resultado = Usuario.deletarUsuarioPorId(usuario.id);

    assert(resultado === true, "Deve deletar o usuário com sucesso");
    assert(Usuario["listaUsuarios"].length === 0, "A lista de usuários deve estar vazia após deleção");
}

function testeBuscaPorNome() {
    resetarUsuarios();

    const usuario = new Usuario("Jade Moon", "jadezin", "12345678900", "senha123", false);
    Usuario.registrarUsuario(usuario);

    const encontrados = Usuario.buscaPorNome("Moon");

    assert(encontrados.length === 1, "Deve encontrar o usuário pelo nome");
    assert(encontrados[0].nome === "Jade Moon", "O nome do usuário encontrado deve ser 'Jade Moon'");
}

// -------------------- EXECUÇÃO --------------------
testeCadastroUsuario();
testeUserNameDuplicado();
testeCpfDuplicado();
testeDelecaoUsuario();
testeBuscaPorNome();