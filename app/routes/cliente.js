module.exports = function(app) {
    
    app.get('/cliente', function(req, res){
        
        var connection = app.infra.connectionFactory(),
            clienteDao = app.infra.ClienteDAO(connection);
        
        clienteDao.lista(function(err, resp){
            res.format({
                json: function() {
                    res.json(resposta);
                } 
            });
        });
        
        connection.end();
    });
};