const express = require('express');
const app = express();
const { Cliente } = require('./database/banco');
 
app.use(express.json());
 

app.get('/cadastro/:nome/:sobrenome/:idade', async (req, res) => {
    const { nome, sobrenome, idade } = req.params;
    try {
       
        const newClient = await Cliente.create({
            nome: `${nome} ${sobrenome}`,
            idade,
            endereco: "Endereço Padrão",
            bairro: "Bairro Padrão",
            cep: "00000-000",
            telefone: "0000-0000",
            celular: "99999-9999"
        });
        res.status(201).json({ message: "Cliente registrado com sucesso!", client: newClient });
    } catch (error) {
        res.status(500).json({ message: "Erro ao registrar cliente", error });
    }
});
 

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor está executando na porta ${PORT}`);
});
