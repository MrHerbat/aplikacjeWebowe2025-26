using cw5_api.Models;

var builder = WebApplication.CreateBuilder(args);
//dodaje do kontenera DI SqlRepo jako implementacje IRepo
//Scoped - jeden obiekt na request
builder.Services.AddScoped<IRepo, SqlRepo>();
var app = builder.Build();
//pobiera z kontenera DI implementacje IRepo
// var repo = app.Services.GetRequiredService<IRepo>();

app.MapGet("/", () => "Hello World!");
app.MapGet("/students", (IRepo repo) => repo.GetAllStudents());
// app.MapGet("/students/{id}", (int id) =>
// {
//     var student = repo.GetStudent(id);
//     if (student == null)
//     {
//         return Results.NotFound("Student not found");
//     }
//     return Results.Ok(student);
// });

app.Run();
