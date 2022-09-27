using Microsoft.EntityFrameworkCore.Migrations;

namespace RishtaAPI.Migrations
{
    public partial class AddFieldsInMembership : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "PlansId",
                table: "MemberShip",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "PlansName",
                table: "MemberShip",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_MemberShip_PlansId",
                table: "MemberShip",
                column: "PlansId",
                unique: true);

            migrationBuilder.AddForeignKey(
                name: "FK_MemberShip_Membership_Plans_PlansId",
                table: "MemberShip",
                column: "PlansId",
                principalTable: "Membership_Plans",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_MemberShip_Membership_Plans_PlansId",
                table: "MemberShip");

            migrationBuilder.DropIndex(
                name: "IX_MemberShip_PlansId",
                table: "MemberShip");

            migrationBuilder.DropColumn(
                name: "PlansId",
                table: "MemberShip");

            migrationBuilder.DropColumn(
                name: "PlansName",
                table: "MemberShip");
        }
    }
}
