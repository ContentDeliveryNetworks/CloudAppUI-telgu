function getFormattedDate(date) {
    const monthNames = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun", 
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    const day = date.getDate();
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
}

function generateDays() {
    const todaysDate = new Date(); 
    const totalDays = 60; 

    for (let i = 0; i <= totalDays; i++) {
        const newDate = new Date(todaysDate); 
        newDate.setDate(todaysDate.getDate() + i); 
        const formattedDate = getFormattedDate(newDate);

       
        const dayElement = document.getElementById(`day${i}`);
        if (dayElement) {
            dayElement.innerHTML = formattedDate;
        }
    }
}


document.addEventListener("DOMContentLoaded", generateDays);
