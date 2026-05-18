export type Book = {
    id: number,
    title: string,
    author: string,
    publishYear: number,
    rating: number,
    genre: "fantasy" | "biography" | "non-fiction" | "romance" | "true crime" | "thriller";
}
export const genres = ["fantasy", "biography", "non-fiction", "romance", "true crime", "thriller"]
export const books: Book[] = [
    {
        id: 1,
        title: "The Midnight Library",
        author: "Matt Haig",
        publishYear: 2020,
        rating: 4,
        genre: "fantasy"
    },
    {
        id: 2,
        title: "I'll Be Gone in the Dark",
        author: "Michelle McNamara",
        publishYear: 2018,
        rating: 4,
        genre: "true crime"
    },
    {
        id: 3,
        title: "The Silent Patient",
        author: "Alex Michaelides",
        publishYear: 2019,
        rating: 4,
        genre: "thriller"
    },
    {
        id: 4,
        title: "Steve Jobs",
        author: "Walter Isaacson",
        publishYear: 2011,
        rating: 5,
        genre: "biography"
    },
    {
        id: 5,
        title: "Sapiens: A Brief History of Humankind",
        author: "Yuval Noah Harari",
        publishYear: 2011,
        rating: 5,
        genre: "non-fiction"
    },
    {
        id: 6,
        title: "People We Meet on Vacation",
        author: "Emily Henry",
        publishYear: 2021,
        rating: 4.0,
        genre: "romance"
    }
];

export const getLatesBookId = (data: Book[]) => {
    let latestId = 0;
    data.forEach(book => {
        if (book.id > latestId) {
            latestId = book.id;
        }
    });
    return latestId;
}