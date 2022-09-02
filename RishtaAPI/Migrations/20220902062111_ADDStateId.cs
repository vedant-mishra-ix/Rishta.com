using Microsoft.EntityFrameworkCore.Migrations;

namespace RishtaAPI.Migrations
{
    public partial class ADDStateId : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "StatesId",
                table: "City",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "StatesId",
                table: "City");
        }
    }
}
