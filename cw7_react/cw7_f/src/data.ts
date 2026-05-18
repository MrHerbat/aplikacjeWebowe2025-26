export type Movie = {
    id: number,
    title: string,
    director: string,
    releaseYear: number,
    genre: "komedia" | "dramat" | "akcja" | "horror" | "sci-fi" | "romans";
}
export const genres = ["komedia", "dramat", "akcja", "horror", "sci-fi", "romans"]
export const movies: Movie[] = [
    {
        id: 1,
        title: "Incepcja",
        director: "Christopher Nolan",
        releaseYear: 2010,
        genre: "sci-fi"
    },
    {
        id: 2,
        title: "Nietykalni",
        director: "Olivier Nakache",
        releaseYear: 2011,
        genre: "komedia"
    },
    {
        id: 3,
        title: "Mroczny Rycerz",
        director: "Christopher Nolan",
        releaseYear: 2008,
        genre: "akcja"
    },
    {
        id: 4,
        title: "Lśnienie",
        director: "Stanley Kubrick",
        releaseYear: 1980,
        genre: "horror"
    },
    {
        id: 5,
        title: "Pianista",
        director: "Roman Polański",
        releaseYear: 2002,
        genre: "dramat"
    },
    {
        id: 6,
        title: "La La Land",
        director: "Damien Chazelle",
        releaseYear: 2016,
        genre: "romans"
    },
    {
        id: 7,
        title: "Matrix",
        director: "Lana Wachowski, Lilly Wachowski",
        releaseYear: 1999,
        genre: "sci-fi"
    },
    {
        id: 8,
        title: "Gladiator",
        director: "Ridley Scott",
        releaseYear: 2000,
        genre: "akcja"
    }
];
export const getLatestMovieId = (data: Movie[]) => {
    let latestId = 0;
    data.forEach(movie => {
        if (movie.id > latestId) {
            latestId = movie.id;
        }
    });
    return latestId;
}