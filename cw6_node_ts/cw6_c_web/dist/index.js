import { colors, books, getMaxId } from "./data.js";
const result1 = document.querySelector("#result1");
const result2 = document.querySelector("#result2");
const form = document.querySelector("form");
form?.addEventListener('submit', (event) => {
    event.preventDefault();
    const newBook = {
        id: getMaxId(books) + 1,
        title: (document.querySelector("#title")?.value || ''),
        author: (document.querySelector("#title")?.value || ''),
        year: Number(document.querySelector("#title")?.value || ''),
        pages: Number(document.querySelector("#title")?.value || ''),
        price: Number(document.querySelector("#title")?.value || ''),
    };
    books.push(newBook);
    if (result2)
        generateTable(books, result2);
});
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
    generateTable(books, result2);
}
else {
    console.error("Brak elementu o id result2");
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
function generateTable(books, elem) {
    elem.innerHTML = '';
    const table = document.createElement("table");
    table.className = "table table-bordered";
    const headerRow = document.createElement("tr");
    headerRow.innerHTML = `
        <th>Lp.</th>
        <th>Tytuł</th>
        <th>Autor</th>
        <th>Rok</th>
        <th>Liczba stron</th>
        <th>Cena</th>
    `;
    table.appendChild(headerRow);
    const fragment = document.createDocumentFragment();
    books.forEach((book) => {
        const row = document.createElement("tr");
        row.className = "clickable";
        const values = [
            String(book.id),
            book.title,
            book.author,
            String(book.year),
            String(book.pages),
            String(book.price) + "PLN"
        ];
        row.onclick = () => {
            const result3 = document.querySelector("#result3");
            if (result3) {
                result3.innerHTML = `<h3>Szczegóły książki</h3><table class='table table-bordered'>
                    <tr>
                        <th>Lp.</th>
                        <th>Tytuł</th>
                        <th>Autor</th>
                        <th>Rok</th>
                        <th>Liczba stron</th>
                        <th>Cena</th></tr>
                    <tr><td>${values.join("</td><td>")}</td></tr>
                    </table>`;
            }
        };
        values.forEach((val, idx) => {
            const td = document.createElement("td");
            td.textContent = val;
            if (idx === 5)
                td.style.backgroundColor = book.price > 35 ? "red" : book.price < 30 ? "green" : "";
            row.appendChild(td);
        });
        fragment.appendChild(row);
    });
    table.appendChild(fragment);
    elem.appendChild(table);
}
//# sourceMappingURL=index.js.map