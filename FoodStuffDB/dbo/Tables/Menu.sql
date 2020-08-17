CREATE TABLE [dbo].[Menu]
(
	[Id] INT NOT NULL PRIMARY KEY, 
    [Name] VARCHAR(50) NOT NULL, 
    [Description] VARCHAR(50) NOT NULL, 
    [Price] FLOAT NOT NULL, 
    [Category] VARCHAR(50) NOT NULL
)
