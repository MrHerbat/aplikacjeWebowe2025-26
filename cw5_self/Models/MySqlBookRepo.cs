using System;
using MySql.Data.MySqlClient;
using cw5_self.Models.Abstraction;

namespace cw5_self.Models;

public class MySqlBookRepo : IBookRepo
{
    private readonly string? _connectionString;
    public MySqlBookRepo(IConfiguration configuration)
    {
        _connectionString = configuration.GetConnectionString("mysql");
    }
    public void AddBook(Book book)
    {
        using var con = new MySqlConnection(_connectionString);
        using var cmd = con.CreateCommand();
        cmd.CommandText = $"INSERT INTO `Books`(`Title`, `Author`, `PublishedDate`, `BorrowerId`) VALUES ('{book.Title}','{book.Author}',@date,@borrower);";
        string formatedDate = book.PublishedDate.ToString("yyyy-MM-dd");
        cmd.Parameters.AddWithValue("@date", formatedDate);
        if (book.BorrowerId == null){
            cmd.Parameters.AddWithValue("@borrower", null); 
        }else{
            cmd.Parameters.AddWithValue("@borrower", book.BorrowerId); 
        }
        con.Open();
        cmd.ExecuteNonQuery();
        con.Close();
    }

    public void DeleteBook(int id)
    {
        using var con = new MySqlConnection(_connectionString);
        using var cmd = con.CreateCommand();
        cmd.CommandText = $"DELETE FROM Books WHERE Id = {id}";
        con.Open();
        cmd.ExecuteNonQuery();
        con.Close();
    }

    public List<Book> GetAllBooks()
    {
        using var con = new MySqlConnection(_connectionString);
        using var cmd = con.CreateCommand();
        cmd.CommandText = "SELECT * FROM Books";
        con.Open();
        var books = new List<Book>();
        using var reader = cmd.ExecuteReader();
        while (reader.Read())
        {
            var book = new Book
            {
                Id = reader.GetInt32(0),
                Title = reader.GetString(1),
                Author = reader.GetString(2),
                PublishedDate = reader.GetDateTime(3),
                BorrowerId = reader.IsDBNull(4) ? null : reader.GetInt32(4)
            };
            books.Add(book);
         }
        return books;
    }

    public Book? GetBookById(int id)
    {
        using var con = new MySqlConnection(_connectionString);
        using var cmd = con.CreateCommand();
        cmd.CommandText = $"SELECT * FROM Books Where Id = {id}";
        con.Open();
        var reader = cmd.ExecuteReader();
        if(reader.Read())
        {
            var book = new Book()
            {
                Id = reader.GetInt32(0),
                Title = reader.GetString(1),
                Author = reader.GetString(2),
                PublishedDate = reader.GetDateTime(3),
                BorrowerId = reader.IsDBNull(4) ? null : reader.GetInt32(4)
            };
            return book;
        }else{
            return null;
        }
    }

    public void UpdateBook(Book book)
    {
        using var con = new MySqlConnection(_connectionString);
        using var cmd = con.CreateCommand();
        cmd.CommandText = $"UPDATE Books SET `Title` = '{book.Title}', `Author` = '{book.Author}', `PublishedDate` = @date, `BorrowerId` = @borrower WHERE Id = {book.Id}";
        string formatedDate = book.PublishedDate.ToString("yyyy-MM-dd");
        cmd.Parameters.AddWithValue("@date", formatedDate);
        if (book.BorrowerId == null){
            cmd.Parameters.AddWithValue("@borrower", null); 
        }else{
            cmd.Parameters.AddWithValue("@borrower", book.BorrowerId); 
        }
        
        con.Open();
        cmd.ExecuteNonQuery();
        con.Close();
    }
}
