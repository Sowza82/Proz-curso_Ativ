-- Criando o schema ESCOLA
CREATE SCHEMA IF NOT EXISTS ESCOLA;
-- Criando a tabela ALUNO no schema ESCOLA
CREATE TABLE ESCOLA.ALUNO (
    ID SERIAL PRIMARY KEY,
    nome VARCHAR(100),
    email VARCHAR(100),
    endereco VARCHAR(255)
);
