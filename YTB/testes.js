/*
=====================================================
TRILHA DE EXERCÍCIOS — DO ZERO ATÉ PROMISES (BACKEND)
=====================================================

REGRAS:
- Resolva os exercícios na ordem
- Não pule etapas
- Use console.log para testar
- Um exercício por vez

-----------------------------------------------------
BLOCO 1 — FUNDAMENTOS ABSOLUTOS
-----------------------------------------------------
*/

/*
EXERCÍCIO 1 — Função básica
Crie uma função somar(a, b) que retorne a soma de dois números.
*/
function somar(a, b) {
   return a + b
   
}
let resultado = somar(20, 10)
console.log(resultado);

/*
EXERCÍCIO 2 — Condicional
Crie uma função verificarIdade(idade) que:
- retorne "menor de idade" se idade < 18
- retorne "maior de idade" se idade >= 18
*/
function verificarIdade(idade) {
  if (idade < 18){
    return `Você não tem 18 anos ainda, portanto é menor de idade.`
  }else {
    return `Você já é maior de idade`
    
  }
}

console.log(verificarIdade(21));


/*
EXERCÍCIO 3 — Loop
Crie uma função criarLista(n) que retorne um array com números de 1 até n.
*/
let lista = [];
function criarArray (n) {
  for (let i = 0; i < n; i++ ){
    lista.push(i)    
    }
}
criarArray(10);
console.log(lista);

/*
-----------------------------------------------------
BLOCO 2 — OBJETOS E ARRAYS (BASE BACKEND)
-----------------------------------------------------
*/

/*
EXERCÍCIO 4 — Objeto
Dado o objeto abaixo, crie uma função que retorne:
"Ana tem 25 anos"
*/

const usuario = {  };

function descreverUsuario(nome, idade) {

  return `${nome} tem ${idade} anos`
  
}

console.log(descreverUsuario('Kaleb', 23));


/*
EXERCÍCIO 5 — Percorrer array
Dado o array abaixo, crie uma função que retorne a soma dos números.
NÃO usar reduce.
*/
const numeros = [2, 4, 6, 8];
let total = 0
function somarNumeros(numeros) {
  
  for(let numero of numeros) {
  total += numero
}
return total
  
}
console.log(somarNumeros(numeros));


/*
EXERCÍCIO 6 — Filtrar dados
Retorne somente os usuários ativos.
*/
const usuarios = [
  { id: 1, ativo: true },
  { id: 2, ativo: false },
  { id: 3, ativo: true }
];

function filtrarUsuariosAtivos(usuarios) {
  const usuarioAtivo = usuarios.filter(usuarios => usuarios.ativo !== false)
  return usuarioAtivo
}
console.log(filtrarUsuariosAtivos(usuarios));

/*
-----------------------------------------------------
BLOCO 3 — FUNÇÕES COMO DADOS (CALLBACK)
-----------------------------------------------------
*/

/*
EXERCÍCIO 7 — Callback simples
Crie a função processar(valor, callback)
Ela deve chamar o callback passando valor * 2
*/
function processar(valor, callback) {
  
  callback(valor * 2);
   }

   function metadeValor(resultado){

    console.log(resultado);
    
   }
processar(15,metadeValor);
   
   



/*
EXERCÍCIO 8 — Simular atraso
Crie a função buscarDados(callback)
Ela deve:
- esperar 2 segundos
- chamar o callback com "dados carregados"
*/
function buscarDados(callback) {
    setTimeout(() => {
    callback("dados carregados");
  }, 2000)}

  buscarDados(function(mensagem) {
  console.log(mensagem);
});

/*
-----------------------------------------------------
BLOCO 4 — CALLBACK HELL (PROBLEMA REAL)
-----------------------------------------------------
*/

/*
EXERCÍCIO 9 — Encadeamento com callbacks
Implemente funções que:
1. Busquem um usuário
2. Busquem os pedidos do usuário
3. Calculem o total gasto

Use APENAS callbacks.
*/

function buscarUsuarioCallback(id, callback) {
  // seu código aqui
}

function buscarPedidosCallback(userId, callback) {
  // seu código aqui
}

function calcularTotalCallback(pedidos, callback) {
  // seu código aqui
}

/*
-----------------------------------------------------
BLOCO 5 — PROMISE DO ZERO
-----------------------------------------------------
*/

/*
EXERCÍCIO 10 — Criar Promise
Crie a função buscarUsuarioPromise(id)
- resolve se id === 1
- reject caso contrário
*/
function buscarUsuarioPromise(id) {
  // seu código aqui
}

/*
EXERCÍCIO 11 — Encadeamento com Promise
1. Busque o usuário
2. Busque os pedidos
3. Calcule o total
Use .then() e finalize com .catch()
*/

function buscarPedidosPromise(userId) {
  // seu código aqui
}

function calcularTotalPromise(pedidos) {
  // seu código aqui
}

/*
-----------------------------------------------------
BLOCO 6 — ASYNC / AWAIT (PADRÃO BACKEND)
-----------------------------------------------------
*/

/*
EXERCÍCIO 12 — Refatoração
Reescreva o exercício 11 usando:
- async / await
- try / catch
*/
async function executarAsync() {
  // seu código aqui
}

/*
-----------------------------------------------------
BLOCO 7 — DESAFIO FINAL (BACKEND REAL)
-----------------------------------------------------
*/

/*
EXERCÍCIO 13 — Pipeline assíncrono
Crie a função gerarRelatorio()

Ela deve:
- buscar usuários e pedidos em paralelo
- montar um relatório com total por usuário
- tratar erros corretamente
*/

async function gerarRelatorio() {
  // seu código aqui
}

/*
=====================================================
FIM DA TRILHA
=====================================================
*/
