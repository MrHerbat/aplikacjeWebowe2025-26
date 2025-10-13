using System;

namespace cw5_api.Models;

public class FakeRepo : IRepo
{
    private List<Student> _students;
    public FakeRepo()
    {
        _students = new List<Student>
        {
            new Student { Id = 1, Name = "Jan", LastName = "Kowalski", BirthDate = new DateTime(2000, 1, 1) },
            new Student { Id = 2, Name = "Anna", LastName = "Nowak", BirthDate = new DateTime(1999, 5, 15) },
            new Student { Id = 3, Name = "Piotr", LastName = "Zieliński", BirthDate = new DateTime(2001, 3, 22) }
        };
    }
    public void AddStudent(Student student)
    {
        throw new NotImplementedException();
    }

    public void DeleteStudent(int id)
    {
        throw new NotImplementedException();
    }

    public List<Student> GetAllStudents()
    {
        return _students;
    }

    public Student? GetStudent(int id)
    {
        //return _students.FirstOrDefault(s => s.Id == id);
        return _students.Find(s => s.Id == id);
    }

    public void UpdateStudent(Student student)
    {
        throw new NotImplementedException();
    }
}
