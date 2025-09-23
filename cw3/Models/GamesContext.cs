using System;
using Microsoft.EntityFrameworkCore;

namespace cw3.Models;

public class GamesContext : DbContext
{
    public GamesContext(DbContextOptions<GamesContext> options) 
    : base(options)
    {}
    public DbSet<Game> Game { get; set;}
    public DbSet<Studio> Studio { get; set;}

     protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
        modelBuilder.Entity<Game>().HasData(
            new Game{
                Id = 1,
                Title = "Cyberpunk 2077",
                DateOfPublication = new DateTime(2020, 12, 10),
                Price = 199.99f,
                StudioId = 1
            },
            new Game{
                Id = 2,
                Title = "The Witcher 3: Wild Hunt",
                DateOfPublication = new DateTime(2015, 5, 19),
                Price = 149.99f,
                StudioId = 1
            },
            new Game{
                Id = 3,
                Title = "Red Dead Redemption 2",
                DateOfPublication = new DateTime(2018, 10, 26),
                Price = 179.99f,
                StudioId = 2
            }
        );
        modelBuilder.Entity<Studio>().HasData(
            new Studio{
                Id = 1,
                Name = "CD Projekt Red",
                Address = "Jagiellońska 74, 03-301 Warszawa, Polska"
            },
            new Studio{
                Id = 2,
                Name = "Rockstar Games",
                Address = "475 Park Avenue South, New York, NY 10016, USA"
            }
        );
    }
}
