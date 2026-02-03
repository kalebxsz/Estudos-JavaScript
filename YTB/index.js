function contarPessoas(){
   const pessoas = [
    {
        nome: 'Mariana',
        age: 28,
        tipo: 'B'
    },
    {
        nome: 'Enzo',
        age: 19,
        tipo: 'A'
    },
    {
        nome: 'Beatriz',
        age: 35,
        tipo: 'C'
    },
    {
        nome: 'Thiago',
        age: 42,
        tipo: 'B'
    },
    {
        nome: 'Larissa',
        age: 26,
        tipo: 'A'
    },
    {
        nome: 'Ricardo',
        age: 31,
        tipo: 'D'
    },
    {
        nome: 'Sofia',
        age: 22,
        tipo: 'C'
    }
]

return pessoas.filter(obj => obj.age >= 20);
}
console.log(contarPessoas());

