const { Sequelize, DataTypes } = require('sequelize');
 

const sequelize = new Sequelize('test', 'root', 'senha', {
    host: 'localhost',
    dialect: 'mysql'
});

const Cliente = sequelize.define('Cliente', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    idade:{
        type: DataTypes.STRING,
        allowNull: false
    },
    endereco: {
        type: DataTypes.STRING,
        allowNull: false
    },
    bairro: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cep: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telefone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    celular: {
        type: DataTypes.STRING,
        allowNull: false
    }
});
 

sequelize.sync({ force: true }).then(async () => {
    
    await Cliente.bulkCreate([
        {
            nome: 'João Silva',
            idade: '20',
            endereco: 'Rua A, 123',
            bairro: 'Centro',
            cep: '12345-678',
            telefone: '1111-1111',
            celular: '99999-9999'
        },
        {
            nome: 'Maria Oliveira',
            idade: '40',
            endereco: 'Rua B, 456',
            bairro: 'Bairro Novo',
            cep: '98765-432',
            telefone: '2222-2222',
            celular: '88888-8888'
        },
        {
            nome: 'Carlos Souza',
            idade: '30',
            endereco: 'Rua C, 789',
            bairro: 'Bairro Velho',
            cep: '45678-123',
            telefone: '3333-3333',
            celular: '77777-7777'
        }
    ]);
    console.log("Clientes iniciais adicionados ao banco de dados.");
});
 
module.exports = {
    Cliente
};
