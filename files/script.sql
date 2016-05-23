CREATE database cadastracliente;
use cadastracliente;

CREATE TABLE cliente(
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
	sobrenome VARCHAR(255) NOT NULL,
    dtnascimento DATE NOT NULL,
    email VARCHAR(255),
    telefone VARCHAR(20),
    endereco VARCHAR(255) NOT NULL
) ENGINE = INNODB;