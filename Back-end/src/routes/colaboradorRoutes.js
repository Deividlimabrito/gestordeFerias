const express = require('express');
const router = express.Router();
const db = require('../config/db');

router.get('/', (req, res) => {
    const sql = 'SELECT * FROM colaboradores';
    db.query(sql, (erro, resultados) => {
        if (erro) {
            console.error('Erro ao buscar colaborades:', erro);
            return res.status(500).json({ erro: 'Erro interno ao buscar dados' })
        }

        return res.json(resultados);
    })
})

router.delete('/:id', (req, res) => {
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

router.post('/', (req, res) => {
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

router.put('/:id', (req, res) => {
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

module.exports = router;