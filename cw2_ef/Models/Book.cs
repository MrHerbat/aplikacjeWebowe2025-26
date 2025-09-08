using System.ComponentModel;

namespace cw_3f.Models;

public class Book
{
    public int Id { get; set; }

    [DisplayName("Tytuł")]
    public string Title { get; set; }

    [DisplayName("Autor")]
    public string Author { get; set; }

    [DisplayName("Data publikacji")]
    public DateTime PublishedDate { get; set; }
}