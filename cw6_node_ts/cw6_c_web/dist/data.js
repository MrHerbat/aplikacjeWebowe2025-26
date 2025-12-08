export const colors = ["red", "green", "blue"];
export const books = [
    { id: 1, title: "Lalka", author: "Bolesław Prus", year: 1890, pages: 648, price: 39.99 },
    { id: 2, title: "Sto lat samotności", author: "Gabriel García Márquez", year: 1967, pages: 417, price: 29.5 },
    { id: 3, title: "Fundacja", author: "Isaac Asimov", year: 1951, pages: 255, price: 24.99 },
    { id: 4, title: "Sapiens: Od zwierząt do bogów", author: "Yuval Noah Harari", year: 2011, pages: 464, price: 49.9 },
    { id: 5, title: "Ostatnie życzenie", author: "Andrzej Sapkowski", year: 1993, pages: 288, price: 34.5 }
];
export const getMaxId = (data) => {
    let max = 0;
    for (const book of data) {
        if (book.id > max) {
            max = book.id;
        }
    }
    return max;
};
//# sourceMappingURL=data.js.map