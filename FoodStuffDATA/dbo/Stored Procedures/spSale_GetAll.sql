CREATE PROCEDURE [dbo].[spSale_GetAll]
AS
begin
	set nocount on;

	select Id, ProductName, Quantity, EmailAddress, SaleDate, PurchasePrice
	from dbo.Sale
	order by ProductName;
end