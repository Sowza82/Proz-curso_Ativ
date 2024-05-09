-- Criar a tabela de autores
CREATE TABLE Autores (
    AutorID SERIAL PRIMARY KEY,
    Nome VARCHAR(100)
);

-- Criar a tabela de editoras
CREATE TABLE Editoras (
    EditoraID SERIAL PRIMARY KEY,
    Nome VARCHAR(100)
);

-- Criar a tabela de livros
CREATE TABLE Livros (
    LivroID SERIAL PRIMARY KEY,
    Titulo VARCHAR(100),
    AutorID INT,
    EditoraID INT,
    AnoPublicacao INT,
    FOREIGN KEY (AutorID) REFERENCES Autores(AutorID),
    FOREIGN KEY (EditoraID) REFERENCES Editoras(EditoraID)
);

-- Inserir dados na tabela de autores
INSERT INTO Autores (Nome) VALUES 
('J.K. Rowling'),
('Stephen King'),
('Agatha Christie');

-- Inserir dados na tabela de editoras
INSERT INTO Editoras (Nome) VALUES 
('Editora Rocco'),
('Penguin Random House'),
('HarperCollins');

-- Inserir dados na tabela de livros
INSERT INTO Livros (Titulo, AutorID, EditoraID, AnoPublicacao) VALUES 
('Harry Potter e a Pedra Filosofal', 1, 1, 1997),
('It', 2, 2, 1986),
('Assassinato no Expresso Oriente', 3, 3, 1934);
