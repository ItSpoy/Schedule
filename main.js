const monthnameEl= document.getElementById("month-name");
const daynameEl = document.getElementById("day-name");
const daynumEl = document.getElementById("day-number");
const yearEl = document.getElementById("year");

const date = new Date();
const month = date.getMonth();
monthnameEl.innerText = date.toLocaleString("en", {
    month : "long"})

daynameEl.innerText = date.toLocaleString("en ",{
    weekday : "long"
})

daynumEl.innerText = date.getDate();

yearEl.innerText = date.getFullYear();
