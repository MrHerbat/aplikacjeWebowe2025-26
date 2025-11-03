using cw5_self.Models;
using cw5_self.Models.Abstraction;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddScoped<IBookRepo, MySqlBookRepo>();

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll",
        builder =>
        {
            builder.AllowAnyOrigin()
                   .AllowAnyMethod()
                   .AllowAnyHeader();
        });
});


var app = builder.Build();
app.UseCors("AllowAll");

app.MapGet("/", () => "Hello World!");
app.MapGet("/books", (IBookRepo repo) => repo.GetAllBooks());
app.MapGet("/books/{id}", (IBookRepo repo, int id) =>
{
    var book = repo.GetBookById(id);
    if (book == null)
    {
        return Results.NotFound("Book not found");
    }
    return Results.Ok(book);
});
app.MapDelete("/books/{id}", (IBookRepo repo, int id) =>
{
    repo.DeleteBook(id);
    return Results.Ok("Book deleted");
});
app.MapPut("/books/{id}", (IBookRepo repo, Book book, int? id) =>
{
    Book? bookToUpdate = repo.GetBookById(id ?? 0);
    if (bookToUpdate == null)
    {
        return Results.NotFound("Book not found");
    }
    book.Id = id ?? 0;
    repo.UpdateBook(book);
    return Results.Ok("Book updated");
});
app.MapPost("/books", (IBookRepo repo, Book book) =>
{
    repo.AddBook(book);
    return Results.Ok("Book Added");
});

app.Run();
