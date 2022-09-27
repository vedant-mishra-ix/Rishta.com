using Microsoft.EntityFrameworkCore.Migrations;

namespace RishtaAPI.Migrations
{
    public partial class RemovedPlansNamePropertyFromMembership : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "PlansName",
                table: "MemberShip");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "PlansName",
                table: "MemberShip",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
