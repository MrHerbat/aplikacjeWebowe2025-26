dateBtn = document.querySelector("#showDate");
leftDaysBtn = document.querySelector("#tillVacation");
showTimeBtn = document.querySelector("#showTime");
dateBtn.addEventListener("click", () => {
    document.querySelector("#result1")
        .innerText = new Date().toLocaleDateString();
});
leftDaysBtn.addEventListener("click", () => {
    let msInDay = 24 * 60 * 60 * 1000;
    let todaysDate = new Date();
    let firstVacationDay = new Date("2026-06-27");
    console.log(todaysDate);
    document.querySelector("#result2")
        .innerHTML = "today's date:" +
        todaysDate.toLocaleDateString() + "<br>Days till vacations:" +
        Math.round(Math.abs(firstVacationDay - todaysDate) / msInDay);
})
showTimeBtn.addEventListener("click", () => {
    document.querySelector("#result3").innerText = new Date().toLocaleTimeString()
    setInterval(() => {
        document.querySelector("#result3").innerText = new Date().toLocaleTimeString()
    }, 1000);
})