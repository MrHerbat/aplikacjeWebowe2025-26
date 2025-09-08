using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace cw2_ef.Migrations
{
    /// <inheritdoc />
    public partial class First : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Books",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Title = table.Column<string>(type: "TEXT", nullable: false),
                    Author = table.Column<string>(type: "TEXT", nullable: false),
                    PublishedDate = table.Column<DateTime>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Books", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "Books",
                columns: new[] { "Id", "Author", "PublishedDate", "Title" },
                values: new object[,]
                {
                    { 1, "Dmitrij Głuchowski", new DateTime(2015, 6, 12, 0, 0, 0, 0, DateTimeKind.Unspecified), "Metro 2035" },
                    { 2, "Chrsitopher Paolini", new DateTime(2003, 8, 26, 0, 0, 0, 0, DateTimeKind.Unspecified), "Eragon" },
                    { 3, "J.R.R. Tolkien", new DateTime(1937, 9, 21, 0, 0, 0, 0, DateTimeKind.Unspecified), "Hobbit, czyli tam i z powrotem" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Books");
        }
    }
}
