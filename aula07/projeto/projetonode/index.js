const express = require ('express');


const router = express.Router();
/*
router,get('/',(req,res)=>{
    let nome = req.query.nome;
    let idade = req.query.idade;
    res.send('olá ' + nome +' voce tem' + idade + 'anos de idade');
});
*/
/*
router.get('/posts/:id' ,(req,res)=>{
    let id = req.params.id;
    res.send('ID do post: + id');
});
*/
/*
router.get('/' ,(req,res)=>{
    let nome = rew.query.nome;
    let sobrenome = rew.query.idade;

    res.json({
        nomeCompleto:nome+ '' +sobrenome
    });
    
});
*/

router.get('/' ,(req,res)=>{
    let nome = req.query.nome;
    let sobrenome = req.query.idade;

    res.json(req.query);
    
});
router,get('/contato',(req,res)=>{
    res.send('pagina com inforação de contato');
});

router.get('/cadastro',(req,res)=>{
    res.send('Pagina de cadastro da aplicação');
});

module.exports = router;