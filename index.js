//Questão 1:

let info = {
    nome: 'Isabel',
    idade: 20,
    altura: 1.48,
    pets: 8
}
console.log('Questão 1:', info);

//Questão 2:

info.peso = 39;
console.log('Questão 2:', info);

//Questão 3:

delete info.peso;
console.log('Questão 3:', info);

//Questão 4:

console.log('Questão 4:', info.nome);
console.log('Questão 4:', info.idade);
console.log('Questão 4:', info.altura);
console.log('Questão 4:', info.pets);

//Questão 5:

let cadastro = [
    {
        nome: 'Pandora',
        idade: 3,
        telefone: 08001001,
        amigos: ['Mel', 'Pipoca', 'Salém', 'Luna', 'Nina']
    }, 
    {
        nome: 'Mel',
        idade: 0.7,
        telefone: 08001002,
        amigos: ['Pandora', 'Pipoca', 'Salém', 'Luna', 'Nina']
    }, 
    {
        nome: 'Pipoca',
        idade: 0.8,
        telefone: 08001003,
        amigos: ['Mel', 'Pandora', 'Salém', 'Luna', 'Nina']
    },
    {
        nome: 'Salém',
        idade: 0.8,
        telefone: 08001004,
        amigos: ['Mel', 'Pipoca', 'Pandora', 'Luna', 'Nina']
    }, 
    {
        nome: 'Luna',
        idade: 0.5,
        telefone: 08001005,
        amigos: ['Mel', 'Pipoca', 'Salém', 'Pandora', 'Nina']
    }, 
    {
        nome: 'Nina',
        idade: 4,
        telefone: 08001006,
        amigos: ['Mel', 'Pipoca', 'Salém', 'Luna', 'Pandora']
    }
];

console.log('Questão 5:', cadastro);
console.log('Questão 5:', cadastro[0].amigos[1]);
console.log('Questão 5:', cadastro[1].amigos[0]);
console.log('Questão 5:', cadastro[2].amigos[4]);
console.log('Questão 5:', cadastro[3].amigos[3]);
console.log('Questão 5:', cadastro[4].amigos[2]);
console.log('Questão 5:', cadastro[5].amigos[4]);