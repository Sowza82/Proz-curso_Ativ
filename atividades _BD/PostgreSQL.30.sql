-- Tabela de clientes
CREATE TABLE Clientes (
    ClienteID SERIAL PRIMARY KEY,
    Nome VARCHAR(100),
    Email VARCHAR(100)
);

-- Tabela de pedidos
CREATE TABLE Pedidos (
    PedidoID SERIAL PRIMARY KEY,
    ClienteID INT,
    DataPedido DATE,
    Total DECIMAL(10, 2),
    FOREIGN KEY (ClienteID) REFERENCES Clientes(ClienteID)
);

-- Tabela de itens do pedido
CREATE TABLE ItensPedido (
    ItemID SERIAL PRIMARY KEY,
    PedidoID INT,
    Produto VARCHAR(100),
    Quantidade INT,
    PrecoUnitario DECIMAL(10, 2),
    FOREIGN KEY (PedidoID) REFERENCES Pedidos(PedidoID)
);

-- Trigger para calcular o total do pedido quando um item é inserido na tabela ItensPedido
CREATE OR REPLACE FUNCTION CalcularTotalPedido()
RETURNS TRIGGER AS $$
BEGIN
    UPDATE Pedidos SET Total = (SELECT SUM(Quantidade * PrecoUnitario) FROM ItensPedido WHERE PedidoID = NEW.PedidoID) WHERE PedidoID = NEW.PedidoID;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER CalcularTotalPedidoTrigger
AFTER INSERT ON ItensPedido
FOR EACH ROW
EXECUTE FUNCTION CalcularTotalPedido();
