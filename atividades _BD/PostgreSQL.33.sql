-- 1. Criar a tabela "compras" para armazenar as informações sobre as compras de produtos
CREATE TABLE compras (
    id SERIAL PRIMARY KEY,
    data_compra DATE,
    produto VARCHAR(100),
    quantidade INT
);

-- 2. Criar a procedure para gerar o relatório diário da quantidade de produtos comprados
CREATE OR REPLACE PROCEDURE RelatorioQuantidadeProdutosCompradosPorDia(
    data_inicial DATE,
    data_final DATE
)
LANGUAGE SQL
AS $$
    SELECT 
        data_compra,
        SUM(quantidade) AS quantidade_total
    FROM 
        compras
    WHERE 
        data_compra BETWEEN data_inicial AND data_final
    GROUP BY 
        data_compra
    ORDER BY 
        data_compra;
$$;
CALL RelatorioQuantidadeProdutosCompradosPorDia('2024-05-01', '2024-05-07');
