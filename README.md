# Crona

## Descrição

O Sistema de Gestão de Férias é uma solução empresarial desenvolvida para automatizar o controle e agendamento de férias de colaboradores. O sistema substitui processos manuais em planilhas por uma aplicação web integrada, aplicando regras de negócio sofisticadas como prioridade baseada em tempo de admissão.

**Status do Projeto:** Fase de desenvolvimento - Back-end concluído e pronto para integração com Front-end.

## Características Principais

- API REST completa para gerenciamento de colaboradores
- CRUD totalmente funcional com segurança contra SQL Injection
- Banco de dados relacional estruturado
- Preparação para sistema de agendamento de férias com validação de conflitos
- Aplicação de regras de prioridade por antiguidade

## Arquitetura

O projeto é estruturado em dois componentes principais:

### Back-end (Raiz do repositório)

- API REST construída com Node.js e Express
- Banco de dados MySQL
- Rotas de colaboradores (`/src/routes/`)
- Configurações de banco de dados (`/src/config/`)

### Front-end (`projeto-crona/`)

- Aplicação React com Vite
- Componentes Bootstrap para interface responsiva
- Integração planejada com a API Back-end

## Stack Tecnológico

### Back-end

| Tecnologia | Versão | Propósito |
|-----------|--------|----------|
| Node.js | - | Runtime JavaScript |
| Express | ^5.2.1 | Framework HTTP e roteamento |
| MySQL | - | Banco de dados relacional |
| MySQL2 | ^3.17.4 | Driver assíncrono com Prepared Statements |
| CORS | ^2.8.6 | Controle de acesso entre origens |

### Front-end

| Tecnologia | Versão | Propósito |
|-----------|--------|----------|
| React | ^19.2.4 | Biblioteca de UI |
| Vite | ^8.0.0 | Build tool e dev server |
| React Bootstrap | ^2.10.10 | Componentes Bootstrap |
| Bootstrap | ^5.3.8 | Framework CSS |

## Configuração e Instalação

### Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 18+)
- [MySQL](https://www.mysql.com/) (versão 8.0+)
- npm ou yarn

### Instalação Back-end

1. Clone o repositório:

```bash
git clone https://github.com/Deividlimabrito/crona.git
cd crona
