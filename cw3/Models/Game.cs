using System;


namespace cw3.Models;

public class Game
{
    public int Id { get; set;}
    public string Title { get; set;}
    public DateTime DateOfPublication { get; set;}
    public float Price { get; set;}
    public int StudioId { get; set;}
}
