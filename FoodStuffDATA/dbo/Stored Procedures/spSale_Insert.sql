CREATE PROCEDURE [dbo].[spSale_Insert]
	@ProductName nvarchar(MAX),
	@Quantity int,
	@EmailAddress nvarchar(100),
	@SaleDate datetime2,
	@PurchasePrice money
AS
begin
	set nocount on;

	insert into dbo.Sale(ProductName, Quantity, EmailAddress, SaleDate, PurchasePrice)
	values (@ProductName, @Quantity, @EmailAddress, @SaleDate, @PurchasePrice)
end