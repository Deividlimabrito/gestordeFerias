const express = require('express');
const cors = require('cors');

const colaboradorRoutes = require('./src/routes/colaboradorRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/colaboradores', colaboradorRoutes);

const PORTA = 3001;
app.listen(PORTA, () => {
    console.log(`Servidor rodando na porta ${PORTA}`);
});