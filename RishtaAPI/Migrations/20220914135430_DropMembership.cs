using Microsoft.EntityFrameworkCore.Migrations;

namespace RishtaAPI.Migrations
{
    public partial class DropMembership : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_MemberShip_PlansId",
                table: "MemberShip");

            migrationBuilder.CreateIndex(
                name: "IX_MemberShip_PlansId",
                table: "MemberShip",
                column: "PlansId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_MemberShip_PlansId",
                table: "MemberShip");

            migrationBuilder.CreateIndex(
                name: "IX_MemberShip_PlansId",
                table: "MemberShip",
                column: "PlansId",
                unique: true);
        }
    }
}
