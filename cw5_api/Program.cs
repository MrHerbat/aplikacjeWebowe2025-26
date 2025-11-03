using cw5_api.Models;

var builder = WebApplication.CreateBuilder(args);
//dodaje do kontenera DI SqlRepo jako implementacje IRepo
//Scoped - jeden obiekt na request
builder.Services.AddScoped<IRepo, SqlRepo>();
var app = builder.Build();
// builder.Services.AddCors(options =>
// {
//     options.AddPolicy("AllowAll",
//     builder =>
//     {
//         builder.AllowAnyOrigin()
//             .AllowAnyHeader()
//             .AllowAnyMethod();
//     }
//     );
// });
//pobiera z kontenera DI implementacje IRepo
// var repo = app.Services.GetRequiredService<IRepo>();

// app.UseCors("AllowAll");

app.MapGet("/", () => "Hello World!");
app.MapGet("/students", (IRepo repo) => repo.GetAllStudents());
app.MapGet("/students/{id}", (IRepo repo, int id) =>
{
    var student = repo.GetStudent(id);
    if (student == null)
    {
        return Results.NotFound("Student not found");
    }
    return Results.Ok(student);
});
app.MapPost("/students", (IRepo repo, Student student) =>
{
    repo.AddStudent(student);
    return Results.Ok("Student Added");
});
app.MapPut("/students/{id}", (IRepo repo, Student student, int? id) =>
{
    Student? studentToUpdate = repo.GetStudent(id ?? 0);
    if (studentToUpdate == null)
    {
        return Results.NotFound("Student not found");
    }
    student.Id = id ?? 0;
    repo.UpdateStudent(student);
    return Results.Ok("Student updated");
});
app.MapDelete("/students/{id}", (IRepo repo, int id) =>
{
    repo.DeleteStudent(id);
    return Results.Ok("Student deleted");
});

app.Run();
