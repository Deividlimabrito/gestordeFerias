// 1. Importando as ferramentas
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

// 2. Inicializando o servidor
const app = express();

// 3. Configurações de segurança e formato
app.use(cors());
app.use(express.json());

// 4. Criando a "ponte" com o Banco de Dados
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'sistema_ferias'
});

// 5. Testando a conexão com o banco
db.connect((erro) => {
    if (erro) {
        console.error('❌ Erro ao conectar no MySQL:', erro);
        return;
    }
    console.log('✅ Conectado ao banco de dados com sucesso!');
});

// Rota para listar colocaboradores
app.get('/colaboradores', (req, res) => {
    const sql = 'SELECT * FROM colaboradores';
    db.query(sql, (erro, resultados) => {
        if (erro) {
            console.error('Erro ao buscar colaborades:', erro);
            return res.status(500).json({ erro: 'Erro interno ao buscar dados' })
        }

        return res.json(resultados);
    })
})

app.delete('/colaboradores/:id', (req, res) => {
    const idColaborador = req.params.id;
    const sql = 'DELETE FROM colaboradores WHERE id = ?';
    db.query(sql, [idColaborador], (erro, resultados) => {
        if (erro) {
            console.error('Erro ao deletar colaborador:', erro);
            return res.status(500).json({ erro: 'Erro interno ao deletar o colaborador' });
        }
        if (resultados.affectedRows === 0) {
            return res.status(404).json({ aviso: 'Colaborador não encontrado para exclusão' });
        }
        return res.json({ mensagem: 'Colaborador deletado com sucesso!' });
    });
});

app.post('/colaboradores', (req, res) => {
    const { nome_completo, cpf, data_admissao, id_setor } = req.body;
    const sql = 'INSERT INTO colaboradores (nome_completo, cpf, data_admissao, id_setor) VALUES (?, ?, ?, ?)';

    db.query(sql, [nome_completo, cpf, data_admissao, id_setor], (erro, resultados) => {
        if (erro) {
            console.error('Erro ao cadastrar:', erro);
            return res.status(500).json({ erro: 'Erro interno ao cadastrar' });
        }
        return res.status(201).json({
            mensagem: 'Colaborador cadastrado com sucesso!',
            id_gerado: resultados.insertId
        });
    });
});

app.put('/colaboradores/:id', (req, res) => {
    const idColaborador = req.params.id;
    const { nome_completo, cpf, data_admissao, id_setor } = req.body;
    const sql = 'UPDATE colaboradores SET nome_completo = ?, cpf = ?, data_admissao = ?, id_setor = ? WHERE id = ?';
    const valores = [nome_completo, cpf, data_admissao, id_setor, idColaborador];
    db.query(sql, valores, (erro, resultados) => {
        if (erro) {
            console.error('Erro ao atualizar colaborador:', erro);
            return res.status(500).json({ erro: 'Erro interno ao atualizar' });
        }
        if (resultados.affectedRows === 0) {
            return res.status(404).json({ aviso: 'Colaborador não encontrado para atualização' });
        }
        return res.json({ mensagem: 'Colaborador atualizado com sucesso!' });
    });
});

// 6. Ligando o servidor para escutar requisições
const PORTA = 3001;
app.listen(PORTA, () => {
    console.log(`🚀 Servidor rodando na porta ${PORTA}`);
});