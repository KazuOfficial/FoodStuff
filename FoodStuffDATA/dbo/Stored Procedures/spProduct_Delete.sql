CREATE PROCEDURE [dbo].[spProduct_Delete]
	@ProductName nvarchar(100)
AS
begin
	set nocount on;

	delete from Product where ProductName=@ProductName;
end
