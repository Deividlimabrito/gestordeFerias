DROP DATABASE IF EXISTS sistema_ferias;
CREATE DATABASE sistema_ferias DEFAULT CHARACTER SET utf8mb4;
USE sistema_ferias;

-- 1. TABELA DE PERFIS
CREATE TABLE perfis (
    id_perfil INT AUTO_INCREMENT PRIMARY KEY,
    nome_perfil VARCHAR(50) NOT NULL
);

-- 2. TABELA DE SETORES (A versão nova e correta)
CREATE TABLE setores (
    id_setor INT AUTO_INCREMENT PRIMARY KEY,
    nome_setor VARCHAR(100) NOT NULL,
    sigla VARCHAR(10) NOT NULL,
    limite_saidas_mes INT DEFAULT 1 -- quantas pessoas podem sair de férias
);

-- 3. TABELA DE USUÁRIOS (Substitui os Colaboradores)
CREATE TABLE usuarios (
    id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(150) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    id_perfil INT,
    id_setor INT,
    id_gestor_direto INT, -- Quem aprova as férias dessa pessoa
    data_admissao DATE NOT NULL,
    saldo_dias INT DEFAULT 30,
    ativo BOOLEAN DEFAULT true, -- Para informar funcionario ativo/inativo.
    FOREIGN KEY (id_perfil) REFERENCES perfis(id_perfil),
    FOREIGN KEY (id_setor) REFERENCES setores(id_setor),
    FOREIGN KEY (id_gestor_direto) REFERENCES usuarios(id_usuario)
);

-- 4. TABELA DE SOLICITAÇÕES DE FÉRIAS (Substitui as Férias antigas)
CREATE TABLE solicitacoes_ferias (
    id_solicitacao INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT NOT NULL,
    data_inicio DATE NOT NULL,
    data_fim DATE NOT NULL,
    status VARCHAR(50) DEFAULT 'Pendente', -- Pendente, Em Aprovação, Confirmado, Reprovado
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario)
);

-- 5. TABELA DE FLUXO DE APROVAÇÕES
CREATE TABLE fluxo_aprovacoes (
    id_aprovacao INT AUTO_INCREMENT PRIMARY KEY,
    id_solicitacao INT NOT NULL,
    id_aprovador INT NOT NULL,
    papel_no_fluxo VARCHAR(50), -- Ex: 'Gestor', 'Diretor', 'RH'
    decisao VARCHAR(50),        -- Ex: 'Aprovado', 'Reprovado'
    data_acao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    comentario TEXT,
    FOREIGN KEY (id_solicitacao) REFERENCES solicitacoes_ferias(id_solicitacao) ON DELETE CASCADE,
    FOREIGN KEY (id_aprovador) REFERENCES usuarios(id_usuario)
);
