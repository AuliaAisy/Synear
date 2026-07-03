const keyword = document.getElementById("keyword");
const category = document.getElementById("category");
const locationSelect = document.getElementById("location");
const date = document.getElementById("date");
const searchBtn = document.getElementById("searchBtn");
const resetBtn = document.getElementById("resetBtn");

searchBtn.addEventListener("click", function () {

    const cards = document.querySelectorAll(".event-item");

    cards.forEach(card => {

    const title = card.dataset.title.toLowerCase();
    const cat = card.dataset.category.toLowerCase();
    const loc = card.dataset.location.toLowerCase();
    const eventDate = card.dataset.date;

    const keywordMatch =
        keyword.value === "" ||
        title.includes(keyword.value.toLowerCase());

    const categoryMatch =
        category.value === "All Categories" ||
        cat === category.value.toLowerCase();

    const locationMatch =
        locationSelect.value === "All Cities" ||
        loc === locationSelect.value.toLowerCase();

    const dateMatch =
        date.value === "" ||
        eventDate === date.value;

    if (keywordMatch && categoryMatch && locationMatch && dateMatch) {
        card.style.display = "";
    } else {
        card.style.display = "none";
    }

});

updateResultCount();

});

const resultCount = document.getElementById("resultCount");
const eventCards = document.querySelectorAll(".event-item");

function updateResultCount() {
    const visible = document.querySelectorAll(
        ".event-item:not([style*='display: none'])"
    ).length;

    resultCount.textContent = `Showing ${visible} Event${visible !== 1 ? "s" : ""}`;
}

resetBtn.addEventListener("click", function () {

    keyword.value = "";
    category.selectedIndex = 0;
    locationSelect.selectedIndex = 0;
    date.value = "";

    eventCards.forEach(card => {
        card.style.display = "";
    });

    updateResultCount();

});

updateResultCount();