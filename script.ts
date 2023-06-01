const travelPlans = [
    {"day 1": "Reach the destination"},
    {"day 2": "City Tour in a company tourist bus"},
    {"day 2": "Breakfast & Dinner"},
    {"day 3": "Visit Chang-La"},
    {"day 4": "Back to your home"}
  ];
  
  function populateDropdown(): void {
    const dropdown = document.getElementById("day-dropdown") as HTMLSelectElement;
    const days: string[] = [];
  
    for (let i = 0; i < travelPlans.length; i++) {
      const plan = travelPlans[i];
      const day = Object.keys(plan)[0];
      if (!days.includes(day)) {
        days.push(day);
      }
    }
  
    for (let i = 0; i < days.length; i++) {
      const day = days[i];
      const option = document.createElement("option");
      option.value = day;
      option.textContent = day;
      dropdown.appendChild(option);
    }
  
    dropdown.addEventListener("change", handleDaySelection);
  }
  
  function handleDaySelection(event: Event): void {
    const selectedDay = (event.target as HTMLSelectElement).value;
    const contentDisplay = document.getElementById("content-display");
  
    if (contentDisplay) {
      const filteredPlans = travelPlans.filter(plan => Object.keys(plan)[0] === selectedDay);
      contentDisplay.textContent = filteredPlans.map(plan => Object.values(plan)[0]).join("\n");
    }
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    populateDropdown();
  });
  