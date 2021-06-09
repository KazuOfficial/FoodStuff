CREATE TABLE [dbo].[Sale]
(
	[Id] INT NOT NULL PRIMARY KEY IDENTITY, 
    [ProductName] NVARCHAR(MAX) NOT NULL,
    [Quantity] INT NOT NULL DEFAULT 1, 
    [EmailAddress] NVARCHAR(100) NOT NULL, 
    [SaleDate] DATETIME2 NOT NULL, 
    [PurchasePrice] MONEY NOT NULL, 
)