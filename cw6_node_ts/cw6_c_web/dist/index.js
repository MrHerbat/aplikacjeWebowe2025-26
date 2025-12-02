import { colors, books } from "./data.js";
const result1 = document.querySelector("#result1");
const result2 = document.querySelector("#result2");
if (result1) {
    generColors(colors, result1);
    document.querySelector("#colorSelect")
        ?.addEventListener("change", (event) => {
        document.body.style.backgroundColor =
            event.target.value;
    });
}
else {
    console.error("Brak elementu o id result1");
}
if (result2) {
    generTable(books, result2);
}
function generColors(colors, elem) {
    const select = document.createElement("select");
    select.id = "colorSelect";
    for (const color of colors) {
        const option = document.createElement("option");
        option.value = color;
        option.text = color;
        select.appendChild(option);
    }
    elem.appendChild(select);
}
function generTable(books, elem) {
    const table = document.createElement("table");
    table.className = "table";
    let x = 1;
    let row = document.createElement("tr");
    var headerNumber = document.createElement("th");
    headerNumber.textContent = "#";
    row.appendChild(headerNumber);
    var headerTitle = document.createElement("th");
    headerTitle.textContent = "Title";
    row.appendChild(headerTitle);
    var headerAuthor = document.createElement("th");
    headerAuthor.textContent = "Author";
    row.appendChild(headerAuthor);
    var headerYear = document.createElement("th");
    headerYear.textContent = "Year";
    row.appendChild(headerYear);
    var headerPages = document.createElement("th");
    headerPages.textContent = "Pages";
    row.appendChild(headerPages);
    var headerPrice = document.createElement("th");
    headerPrice.textContent = "Price";
    row.appendChild(headerPrice);
    table.appendChild(row);
    for (const book of books) {
        row = document.createElement("tr");
        const numberCell = document.createElement("td");
        numberCell.textContent = String(x);
        row.appendChild(numberCell);
        const titleCell = document.createElement("td");
        titleCell.textContent = book.title;
        row.appendChild(titleCell);
        const authorCell = document.createElement("td");
        authorCell.textContent = book.author;
        row.appendChild(authorCell);
        const yearCell = document.createElement("td");
        yearCell.textContent = String(book.year);
        row.appendChild(yearCell);
        const pagesCell = document.createElement("td");
        pagesCell.textContent = String(book.pages);
        row.appendChild(pagesCell);
        const priceCell = document.createElement("td");
        book.price > 35 ? priceCell.style.backgroundColor = "red" : book.price < 30 ? priceCell.style.backgroundColor = "green" : null;
        priceCell.textContent = String(book.price);
        row.appendChild(priceCell);
        table.appendChild(row);
        x++;
    }
    elem.appendChild(table);
}
//# sourceMappingURL=index.js.map