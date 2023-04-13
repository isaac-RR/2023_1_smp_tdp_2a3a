//fazer a importação do express
const express = require('express');

//rotas (qi=uando o servidor for acessado, pra onde ele vai ?)
const router = express.Router();
router.get('/',(req, res)=>{
    res.send('Olá Isaac');
});

//configurações basicas do aplicativo

const app = express();
app.use('/',router);//foi passado 1 rota pois criamos apenas 1

app.use(express.json());

module.exports = app; //exportamos o app, pois vamosimporta-lo no servidor