using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace cw2_ef.Migrations
{
    /// <inheritdoc />
    public partial class Editors : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "Title",
                table: "Books",
                type: "TEXT",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "TEXT");

            migrationBuilder.AlterColumn<string>(
                name: "Author",
                table: "Books",
                type: "TEXT",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "TEXT");

            migrationBuilder.CreateTable(
                name: "Editors",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Name = table.Column<string>(type: "TEXT", nullable: true),
                    Address = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Editors", x => x.Id);
                });

            migrationBuilder.UpdateData(
                table: "Books",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "Author", "PublishedDate", "Title" },
                values: new object[] { "Andrzej Sapkowski", new DateTime(1993, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Wiedźmin: Ostatnie życzenie" });

            migrationBuilder.UpdateData(
                table: "Books",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "Author", "PublishedDate", "Title" },
                values: new object[] { "J.K. Rowling", new DateTime(1997, 6, 26, 0, 0, 0, 0, DateTimeKind.Unspecified), "Harry Potter i Kamień Filozoficzny" });

            migrationBuilder.InsertData(
                table: "Editors",
                columns: new[] { "Id", "Address", "Name" },
                values: new object[,]
                {
                    { 1, "ul. Wookkk, Kraków 31-161", "Appress" },
                    { 2, "ul. Wookkk, Kraków 31-161", "Trrrrr" },
                    { 3, "ul. Wookkk, Kraków 31-161", "Rainbow" },
                    { 4, "ul. Zygmunta, Kraków 31-161", "Feryk" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Editors");

            migrationBuilder.AlterColumn<string>(
                name: "Title",
                table: "Books",
                type: "TEXT",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "TEXT",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "Author",
                table: "Books",
                type: "TEXT",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "TEXT",
                oldNullable: true);

            migrationBuilder.UpdateData(
                table: "Books",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "Author", "PublishedDate", "Title" },
                values: new object[] { "Dmitrij Głuchowski", new DateTime(2015, 6, 12, 0, 0, 0, 0, DateTimeKind.Unspecified), "Metro 2035" });

            migrationBuilder.UpdateData(
                table: "Books",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "Author", "PublishedDate", "Title" },
                values: new object[] { "Chrsitopher Paolini", new DateTime(2003, 8, 26, 0, 0, 0, 0, DateTimeKind.Unspecified), "Eragon" });
        }
    }
}
