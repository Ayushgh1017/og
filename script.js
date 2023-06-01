var travelPlans = [
    { "day 1": "Reach the destination" },
    { "day 2": "City Tour in a company tourist bus" },
    { "day 2": "Breakfast & Dinner" },
    { "day 3": "Visit Chang-La" },
    { "day 4": "Back to your home" }
];
function populateDropdown() {
    var dropdown = document.getElementById("day-dropdown");
    var days = [];
    for (var i = 0; i < travelPlans.length; i++) {
        var plan = travelPlans[i];
        var day = Object.keys(plan)[0];
        if (!days.includes(day)) {
            days.push(day);
        }
    }
    for (var i = 0; i < days.length; i++) {
        var day = days[i];
        var option = document.createElement("option");
        option.value = day;
        option.textContent = day;
        dropdown.appendChild(option);
    }
    dropdown.addEventListener("change", handleDaySelection);
}
function handleDaySelection(event) {
    var selectedDay = event.target.value;
    var contentDisplay = document.getElementById("content-display");
    if (contentDisplay) {
        var filteredPlans = travelPlans.filter(function (plan) { return Object.keys(plan)[0] === selectedDay; });
        contentDisplay.textContent = filteredPlans.map(function (plan) { return Object.values(plan)[0]; }).join("\n");
    }
}
document.addEventListener("DOMContentLoaded", function () {
    populateDropdown();
});
