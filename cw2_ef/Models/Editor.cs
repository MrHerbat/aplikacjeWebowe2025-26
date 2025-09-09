using System;
using System.ComponentModel;

namespace cw2_ef.Models;

public class Editor
{
    public int Id { get; set; }
    [DisplayName("Nazwa")]
    public string? Name { get; set; }
    [DisplayName("Adres")]
    public string? Address { get; set; }
}
