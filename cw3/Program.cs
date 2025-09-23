using cw12_ef.Models;
using Microsoft.EntityFrameworkCore;
var builder = WebApplication.CreateBuilder(args);
builder.Services.AddControllersWithViews();
var connString = builder.Configuration.GetConnectionString("mysql");
builder.Services.AddDbContext<GamesContext>(option => {
     option.UseMySql(connString, ServerVersion.AutoDetect(connString));
});
var app = builder.Build();
app.UseStaticFiles();
app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Games}/{action=list}"
);

app.Run();