
CREATE DATABASE IF NOT EXISTS sistema_ferias DEFAULT CHARACTER SET utf8mb4;
USE sistema_ferias;

-- 2. Tabela de Setores
CREATE TABLE setores (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL UNIQUE
);

-- 3. Tabela de Colaboradores (Refatorada)
CREATE TABLE colaboradores (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome_completo VARCHAR(255) NOT NULL,
    cpf VARCHAR(14) NOT NULL UNIQUE,
    data_admissao DATE NOT NULL,
    id_setor INT NOT NULL,
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Auditoria automática
    FOREIGN KEY (id_setor) REFERENCES setores (id)
);

-- 4. Tabela de Férias
CREATE TABLE ferias (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_colaborador INT NOT NULL, -- Agora aponta para o ID interno, não mais para o CPF
    data_inicio DATE NOT NULL,
    data_fim DATE NOT NULL,
    status ENUM('Pendente', 'Aprovado', 'Rejeitado') DEFAULT 'Pendente',
    FOREIGN KEY (id_colaborador) REFERENCES colaboradores (id)
);