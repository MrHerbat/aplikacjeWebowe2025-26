using System;
using cw_3f.Models;
using Microsoft.EntityFrameworkCore;

namespace cw2_ef.Models;

public class BooksContext : DbContext
{
    public BooksContext(DbContextOptions<BooksContext> options) : base(options)
    {

    }
    public DbSet<Book> Books { get; set; }

    //dodawanie startowych danych
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
        modelBuilder.Entity<Book>().HasData(
            new Book
            {
                Id = 1,
                Title = "Metro 2035",
                Author = "Dmitrij Głuchowski",
                PublishedDate = new DateTime(2015,6,12)
            },
            new Book
            {
                Id = 2,
                Title = "Eragon",
                Author = "Chrsitopher Paolini",
                PublishedDate = new DateTime(2003, 8, 26)
            },
            new Book
            {
                Id = 3,
                Title = "Hobbit, czyli tam i z powrotem",
                Author = "J.R.R. Tolkien",
                PublishedDate = new DateTime(1937, 9, 21)
            }
        );
    }

}
