using cw2_ef.Models;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddControllersWithViews();
var connString = builder.Configuration.GetConnectionString("sqlite");
builder.Services.AddDbContext<BooksContext>(
    option => option.UseSqlite(connString)
    );

var app = builder.Build();

app.UseStaticFiles();
app.MapDefaultControllerRoute();


app.Run();
