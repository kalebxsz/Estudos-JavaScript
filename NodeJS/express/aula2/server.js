const express = require('express');
const app = express();


// CRIAR     LER      ATUALIZAR    DELETE 
// CREATE    READ     UPDATE       DELETE
// POST      GET      PUT          DELETE 


// http://meusite.com/   <- GET -> Entregue a pagina 
// http://meusite.com/sobre   <- GET -> Entregue a pagina /sobre
// http://meusite.com/contato   <- GET -> Entregue a pagina /contato

// RAIZ 
app.get('/', (req, res)=> {
    res.send(`
        <form action="/" method="POST">
        Nome: <input type="text" name="nome"> 
        <button>Enviar</button>
        `);
});

app.post('/', (req, res) => {
    res.send('Formulário recebido!')
})


app.get('/contato', (req, res)=> {
    res.send(`
        <form action="/" method="POST">
        Nome: <input type="text" name="nome"> 
        <button>Enviar</button>
        `);
    
})
app.post('/', (req, res) => {
    res.send('Formulário recebido!')
})

app.listen(3000, ()=> {
    console.log('http://localhost:3000');
    console.log('Servidor rodando na porta 3000');
    
});

