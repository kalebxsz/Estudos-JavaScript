// EXERCÍCIOS DE VARIAVEIS 
// 1. Boas-vindas personalizadas
// Crie uma variável chamada nome e atribua seu nome completo. Depois, use console.log() para exibir a mensagem: "Olá, [nome]! Seja bem-vindo(a) ao curso de JavaScript!"
// let nome = "Kaleb";
// console.log(`Boas Vindas ${nome}`)
// // 2. Cálculo de idade
// // Crie duas variáveis: anoAtual e anoNascimento. Calcule a idade da pessoa subtraindo os valores e exiba no console: "Você tem [idade] anos."
// let anoAtual = 2025;
// let anoNascimento = 2002;
// let idade = anoAtual - anoNascimento;
// console.log(`sua idade é ${idade}`);

// 3. Mensagem de localização
// Crie três variáveis com os dados da sua localização: cidade, estado e pais. Em seguida, mostre no console: "Você está em Cidade - Estado, País."
// let cidade = "Porto Alegre";
// let estado = "RS";
// let pais = "Brasil";

// console.log(`Você mora em ${cidade}, ${estado} - ${pais}`);

// // 4. Tipo da variável:
// // Crie uma variável chamada temCarteira com valor true ou false. Use console.log(typeof temCarteira) para mostrar o tipo dessa variável.
// let temCarteira = true;
// console.log(typeof temCarteira);

// 5. Simulação bancária simples:
// Crie uma variável saldo iniciando com 0. Depois, simule um depósito de 200 e um saque de 50. Mostre o saldo final no console com uma frase explicando.
// let saldo = 0;
// let deposito = 200;
// let saque = 50; 

// let conta = (saldo + deposito) - saque;
// console.log(`seu saldo atual é ${conta}`);

// 6. Média de notas:
// Crie variáveis para três disciplinas: matematica, portugues e ciencias, contendo suas respectivas notas. Calcule e mostre a média final com uma mensagem.
// let notaMatematica = 8.4;
// let notaPortugues = 5;
// let notaCiencias = 5;

// let media = (notaMatematica + notaPortugues + notaCiencias) / 3;
// console.log(`A média do aluno é ${media.toFixed(2)}`);

// 7. Reajuste de salário:
// Crie uma variável chamada salario com valor 3000. Calcule um aumento de 10% e mostre o novo salário com uma frase explicando o motivo.
// let salario = 3000;
// let aumento = 10;
// let novoSalario = (salario * aumento) / 100;
// let novoSalarioComAumento = salario += novoSalario
// console.log(`seu novo salario será ${novoSalarioComAumento}`);

// 8. Contador de cliques:
// Simule um contador de cliques em um botão. Crie uma variável cliques = 0 e incremente 1 a cada "simulação de clique". Mostre o total após 3 simulações.


// 9. Constantes não podem ser alteradas
// Crie uma constante chamada PI com o valor 3.14. Tente alterar seu valor e observe o erro gerado. Depois, explique por que isso acontece.
// const PI = 3.14;
// console.log(PI);
// PI = 3.15
// console.log(PI);
//  NÃO SE PODE REDECLARAR UMA CONSTANTE

// 10. Concatenando tipos diferentes
// Crie uma variável mensagem contendo uma string e outra numero contendo um número. Junte as duas em uma terceira variável e exiba o resultado e o tipo final no console usando typeof.
// let nomeUser = "Kaleb";
// let idadeUser = 23;
// let temCNH = true;
// let pessoa = nomeUser + ' ' + idadeUser + ' ' + temCNH
// console.log(pessoa);


// EXERCÍCIOS DE CONDICIONAIS 

// 1. Verificação de maioridade
// Crie uma variável idade e verifique se a pessoa é maior de idade (18 anos ou mais). Mostre no console uma mensagem adequada.
/* let idade = 17 <= 18 ? "usuário é menor de idade" : "Usuário é maior de idade"

console.log(idade); */

// 2. Situação do aluno
// Crie duas variáveis com notas de um aluno. Calcule a média. Se for maior ou igual a 7, mostre "Aprovado". Caso contrário, mostre "Reprovado".
/* let primeiroBi = 5;
let segundoBi = 7;
let notaFinal = (primeiroBi + segundoBi) / 2;
if(notaFinal < 7){
    console.log(`Sua nota foi ${notaFinal} e você foi reprovado`);
}else{
    console.log(`Sua nota foi ${notaFinal} e você foi aprovado`);
    
} */

// 3. Simulação de troco
// Crie uma variável valorCompra com 35.90 e valorPago com 50. Calcule e mostre o troco a ser devolvido.
/* let valorCompra = 35.90;
let valorPago = 50;
let troco = valorPago - valorCompra;

console.log(`O troco da compra é de ${troco.toFixed(2)}`);
 */
// 4. Validação de senha
// Crie duas variáveis com senhas digitadas em momentos diferentes. Verifique se são iguais usando operadores de comparação.
/* let senhas = 1;
let proximaSenha = 2;
console.log(senhas !== proximaSenha);
console.log(senhas === proximaSenha);
console.log(senhas == proximaSenha);
 */
// 5. Controle de faltas
// Considere totalAulas = 80 e faltas = 25. Calcule se as faltas ultrapassam 25% das aulas. Mostre a conclusão no console.
/* let totalAulas = 80;
let faltas = 25;
let total = (totalAulas * faltas) / 100
console.log(`${total}%`);
  */
// 6. Verificação de login
// Crie duas variáveis temLogin e temSenha. Use operadores lógicos para verificar se o usuário pode acessar o sistema.
/* let temLogin = true
let temSenha = false;
if(temLogin && temSenha){
    console.log(`usuário autorizado`);
    
}else{
    console.log(`usuário não autorizado`);
    
}
 */
// 7. Valor negado
// Crie uma variável booleana chamada disponível. Mostre seu valor negado no console, ou seja, se estiver disponível, exiba que não está, e vice-versa.
/* let credito = false;
console.log(!credito); */

// 8. Condições compostas
// Crie duas variáveis com números. Verifique se os dois são pares e se são iguais. Exiba a conclusão.

// 9. Calculadora de porcentagem
// Calcule quanto é 15% de 120 usando operadores matemáticos. Mostre a frase: "15% de 120 é igual a X."
//let taxa = 15;
//let valor = 120;
//let operacao = (taxa * valor) / 100;
//console.log(`15% de 120 é igual a ${operacao}`);

// 10. Ordem de operações
// Escreva a expressão 2 + 3 * 5. Mostre o resultado e explique por que a multiplicação foi feita antes da soma.
/* let operacao = 2 + 3 * 5
console.log(operacao); */
// em uma operação matematica, a multiplicação sempre é executada antes 


/* 
let filaDeUsuarios = [];

console.log(filaDeUsuarios);

function user(nome, email, idade){
    filaDeUsuarios.push(nome, email, idade)
}

user('kaleb', 'kaleb@admin.com', 23);

console.log(filaDeUsuarios);

user('rubi', 'rubi@admin.com', 19);

console.log(filaDeUsuarios.slice(3, 6)); */


