var aplicacao = require('./config/express');

aplicacao.listen(5000, function(){
    console.log("Servidor Rodando"); 
});