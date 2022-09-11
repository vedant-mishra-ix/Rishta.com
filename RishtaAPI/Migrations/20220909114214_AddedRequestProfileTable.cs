using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace RishtaAPI.Migrations
{
    public partial class AddedRequestProfileTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "RequestProfile",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    RequestId = table.Column<int>(type: "int", nullable: false),
                    RegisteredId = table.Column<int>(type: "int", nullable: false),
                    CreatedDateTime = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RequestProfile", x => x.Id);
                    table.ForeignKey(
                        name: "FK_RequestProfile_Registration_RegisteredId",
                        column: x => x.RegisteredId,
                        principalTable: "Registration",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_RequestProfile_RegisteredId",
                table: "RequestProfile",
                column: "RegisteredId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "RequestProfile");
        }
    }
}
