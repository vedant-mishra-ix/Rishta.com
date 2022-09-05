using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace RishtaAPI.Migrations
{
    public partial class AddRelationShip : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "IsActive",
                table: "Registration",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.CreateTable(
                name: "MemberShip",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Pay = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    RegisteredId = table.Column<int>(type: "int", nullable: false),
                    CreatedDateTime = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MemberShip", x => x.Id);
                    table.ForeignKey(
                        name: "FK_MemberShip_Registration_RegisteredId",
                        column: x => x.RegisteredId,
                        principalTable: "Registration",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ReportProfile",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Mobile = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    RegisteredId = table.Column<int>(type: "int", nullable: false),
                    CreatedDateTime = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ReportProfile", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ReportProfile_Registration_RegisteredId",
                        column: x => x.RegisteredId,
                        principalTable: "Registration",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_MemberShip_RegisteredId",
                table: "MemberShip",
                column: "RegisteredId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_ReportProfile_RegisteredId",
                table: "ReportProfile",
                column: "RegisteredId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "MemberShip");

            migrationBuilder.DropTable(
                name: "ReportProfile");

            migrationBuilder.DropColumn(
                name: "IsActive",
                table: "Registration");
        }
    }
}
