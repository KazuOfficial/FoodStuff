CREATE TABLE [dbo].[Restaurants]
(
	[Id] INT NOT NULL PRIMARY KEY, 
    [Name] NCHAR(100) NOT NULL, 
    [City] NCHAR(100) NOT NULL, 
    [Street] NCHAR(100) NOT NULL, 
    [Openhour] FLOAT NOT NULL, 
    [Closedhour] FLOAT NOT NULL, 
    [isClosed] BIT NOT NULL
)
