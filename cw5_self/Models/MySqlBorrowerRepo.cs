using System;
using cw5_self.Models.Abstraction;

namespace cw5_self.Models;

public class MySqlBorrowerRepo : IBorrowerRepo
{
    private readonly string? _connectionString;
    public MySqlBorrowerRepo(IConfiguration configuration)
    {
        _connectionString = configuration.GetConnectionString("mysql");
    }
    public void AddBorrower(Borrower borrower)
    {
        throw new NotImplementedException();
    }

    public void DeleteBorrower(int id)
    {
        throw new NotImplementedException();
    }

    public List<Borrower> GetAllBorrowers()
    {
        throw new NotImplementedException();
    }

    public Borrower? GetBorrowerById(int id)
    {
        throw new NotImplementedException();
    }

    public void UpdateBorrower(Borrower borrower)
    {
        throw new NotImplementedException();
    }
}
