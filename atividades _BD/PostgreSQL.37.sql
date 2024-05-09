-- Criar a tabela ALUNO
CREATE TABLE ALUNO (
    Matricula INTEGER PRIMARY KEY,
    PNome TEXT,
    UNome TEXT,
    Nota REAL
);

-- Inserir alguns dados na tabela ALUNO
INSERT INTO ALUNO (Matricula, PNome, UNome, Nota) VALUES 
(1, 'João', 'Silva', 9.5),
(2, 'Maria', 'Santos', 6.8),
(3, 'Pedro', 'Oliveira', 8.3),
(4, 'Ana', 'Souza', 7.2),
(5, 'Carlos', 'Lima', 6.5);

-- Criar a tabela PROFESSOR
CREATE TABLE PROFESSOR (
    ID INTEGER PRIMARY KEY,
    PNome TEXT,
    UNome TEXT
);

-- Inserir alguns dados na tabela PROFESSOR
INSERT INTO PROFESSOR (ID, PNome, UNome) VALUES 
(101, 'José', 'Pereira'),
(102, 'Ana', 'Oliveira'),
(103, 'Maria', 'Silva'),
(104, 'Carlos', 'Lima'),
(105, 'João', 'Souza');
SELECT PNome, UNome, Nota
FROM ALUNO
WHERE Nota > 7.0;

SELECT PNome, UNome, Nota
FROM ALUNO
WHERE Nota >= 8.0;

SELECT PNome, UNome, Nota
FROM ALUNO;

SELECT PNome, UNome
FROM PROFESSOR;

SELECT PNome, UNome
FROM ALUNO;

SELECT PNome, UNome
FROM ALUNO
UNION
SELECT PNome, UNome
FROM PROFESSOR;

SELECT PNome, UNome
FROM ALUNO
INTERSECT
SELECT PNome, UNome
FROM PROFESSOR;


SELECT PNome, UNome
FROM ALUNO
EXCEPT
SELECT PNome, UNome
FROM PROFESSOR;

