-- Criando as tabelas
CREATE TABLE IF NOT EXISTS Autores (
    AutorID SERIAL PRIMARY KEY,
    Nome TEXT NOT NULL,
    Nacionalidade TEXT
);

CREATE TABLE IF NOT EXISTS Editoras (
    EditoraID SERIAL PRIMARY KEY,
    Nome TEXT NOT NULL,
    Cidade TEXT
);

CREATE TABLE IF NOT EXISTS Livros (
    LivroID SERIAL PRIMARY KEY,
    Titulo TEXT NOT NULL,
    AutorID INT,
    EditoraID INT,
    AnoPublicacao INT,
    FOREIGN KEY (AutorID) REFERENCES Autores(AutorID),
    FOREIGN KEY (EditoraID) REFERENCES Editoras(EditoraID)
);

-- Inserindo dados nas tabelas
INSERT INTO Autores (Nome, Nacionalidade) VALUES ('Machado de Assis', 'Brasileira');
INSERT INTO Autores (Nome, Nacionalidade) VALUES ('Gabriel García Márquez', 'Colombiana');
INSERT INTO Autores (Nome, Nacionalidade) VALUES ('Haruki Murakami', 'Japonesa');

INSERT INTO Editoras (Nome, Cidade) VALUES ('Companhia das Letras', 'São Paulo');
INSERT INTO Editoras (Nome, Cidade) VALUES ('Alfaguara', 'Madrid');
INSERT INTO Editoras (Nome, Cidade) VALUES ('Vintage', 'Nova Iorque');

INSERT INTO Livros (Titulo, AutorID, EditoraID, AnoPublicacao) VALUES ('Dom Casmurro', 1, 1, 1899);
INSERT INTO Livros (Titulo, AutorID, EditoraID, AnoPublicacao) VALUES ('Cem Anos de Solidão', 2, 2, 1967);
INSERT INTO Livros (Titulo, AutorID, EditoraID, AnoPublicacao) VALUES ('Norwegian Wood', 3, 3, 1987);

-- Consulta usando JOINs para listar os livros com seus respectivos autores e editoras
SELECT Livros.Titulo, Autores.Nome AS Autor, Editoras.Nome AS Editora
FROM Livros
JOIN Autores ON Livros.AutorID = Autores.AutorID
JOIN Editoras ON Livros.EditoraID = Editoras.EditoraID;
