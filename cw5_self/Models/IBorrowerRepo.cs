using System;

namespace cw5_self.Models.Abstraction;

public interface IBorrowerRepo
{
    List<Borrower> GetAllBorrowers();
    Borrower? GetBorrowerById(int id);
    void AddBorrower(Borrower borrower);
    void UpdateBorrower(Borrower borrower);
    void DeleteBorrower(int id);
}
