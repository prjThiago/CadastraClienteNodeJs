function ClienteDao(connection) {
    this._connection = connection;
};

ClienteDao.prototype.lista = function(callback) {
    this._connection.query('select * from cliente', callback);  
};

ClienteDao.prototype.salva = function(callback) {
    this._connection.query('insert into cliente set ?', cliente, callback);
};

module.exports = function() {
    return ClienteDao;  
};