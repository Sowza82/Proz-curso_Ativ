-- Criar a tabela "clientes" para armazenar as informações dos clientes da loja
CREATE TABLE clientes (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100),
    data_cadastro DATE
);

-- Criar a função para somar o número de clientes cadastrados em um dia específico
CREATE OR REPLACE FUNCTION ContarClientesCadastradosPorDia(data_consulta DATE)
RETURNS INTEGER
AS $$
DECLARE
    total_clientes INTEGER;
BEGIN
    SELECT COUNT(*)
    INTO total_clientes
    FROM clientes
    WHERE DATE(data_cadastro) = data_consulta;

    RETURN total_clientes;
END;
$$ LANGUAGE plpgsql;