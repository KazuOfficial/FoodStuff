CREATE PROCEDURE [dbo].[spProduct_Insert]
	@ProductName nvarchar(100),
	@Description nvarchar(MAX),
	@RetailPrice money

AS
begin
	set nocount on;

	insert into dbo.Product(ProductName, [Description], RetailPrice)
	values (@ProductName, @Description, @RetailPrice);
end
