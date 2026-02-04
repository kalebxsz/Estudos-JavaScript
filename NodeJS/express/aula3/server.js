const express = require('express');
const app = express();


// CRIAR     LER      ATUALIZAR    DELETE 
// CREATE    READ     UPDATE       DELETE
// POST      GET      PUT          DELETE 


// http://meusite.com/   <- GET -> Entregue a pagina 
// http://meusite.com/sobre   <- GET -> Entregue a pagina /sobre
// http://meusite.com/contato   <- GET -> Entregue a pagina /contato


app.use(
    express.urlencoded(
        {
            extended:true
        }
    )
)




// RAIZ 
app.get('/', (req, res)=> {
    res.send(`
        <form action="/" method="POST">
        Nome: <input type="text" name="nome"> 
        <button>Enviar</button>
        `);
});



app.get('/testes', (req, res)=> {
    console.log(req.params)
    console.log(req.query)
    res.send(req.params)
    
})

app.post('/', (req, res) => {
    console.log(req.body);
    
    res.send(`O que você me enviou foi ${req.body.nome}`)
})




app.listen(3000, ()=> {
    console.log('http://localhost:3000');
    console.log('Servidor rodando na porta 3000');
    
});

 