const currentDate = document.querySelector(".currentDate"),
daysTag = document.querySelector(".days"),
preNextIcon = document.querySelectorAll(".icons span");

// Getting new date For Current Year and Month.
let date = new Date(),
    currYear = date.getFullYear(),
    currMonth = date.getMonth();

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

const renderCalendar = () => {
  let firstDayofMonth = new Date(currYear, currMonth, 1).getDate(), //Getting First date of Months
      lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(), //Getting Last date of Months
      lastDayofMonth = new Date(currYear, currMonth).getDay(), //Getting Last Day of Months
      lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); //Getting Last date of Last Months
    let liTags = "";

    // Loop for Getting prevoius months last Day Date.
    for (let currDate = firstDayofMonth; currDate > 0; currDate--) {
        liTags += `<li class="inactive">${lastDateofLastMonth - currDate + 1}</li>`;
        
    }

    // Loop for Getting All Days of Current Months.
    for (let currDate = 1; currDate <= lastDateofMonth; currDate++) {
        // Adding active class to the current date of tha month and year. 
        let isToday = currDate === date.getDate() && currMonth === new Date().getMonth()
                    && currYear === new Date().getFullYear() ? "active" : "";
    liTags += `<li class="${isToday}">${currDate}</li>`;
}

    // Loop for Getting Next Months First Day Date.
    for (let currDate = lastDayofMonth; currDate < 6; currDate++) {
        liTags += `<li class="inactive">${currDate - lastDayofMonth  + 1}</li>`;
        
    }

    currentDate.innerText = `${months[currMonth]} ${currYear}`;
    daysTag.innerHTML = liTags;
};

renderCalendar();

preNextIcon.forEach(icon => {
    icon.addEventListener("click", () => { // Adding Click Event On both Icons

        // If clicked Icon is prevoius icon than Document current Month By 1 else increament it by 1.
        currMonth = icon.id === "prev" ? currMonth -1 : currMonth +1;
        
        // If Current month is less the 0 or Greater than 11. get New Year Date.
        if (currMonth < 0 || currMonth > 11) {
            date = new Date(currYear, currMonth);
            currYear = date.getFullYear(); // Geting Current year with new date year.
            currMonth = date.getMonth(); // Updating current month with new date month.
        }else{ // Else pass new date as date value.
            date = new Date();
        }
        renderCalendar();
    });
});