// Store the selected elements that we are going to use. 
const navElement = document.querySelector('#nav');
const hambutton = document.querySelector('#menu');


// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
hambutton.addEventListener('click', () => {
	navElement.classList.toggle('hide');
	hambutton.classList.toggle('show');
});


// let nLastModif = Date.parse(document.lastModified);
console.log(document.lastModified)

// document.getElementById('lastModified')
document.querySelector('#lastModified').innerHTML = document.lastModified;



document.addEventListener('DOMContentLoaded', function () {
    // Check if localStorage has a 'lastVisit' entry
    if (localStorage.getItem('lastVisit') === null) {
        // If it's the first visit, display a welcome message
        showMessage("Welcome! Let us know if you have any questions.");
    } else {
        // Get the last visit timestamp from localStorage
        const lastVisitTimestamp = parseInt(localStorage.getItem('lastVisit'));
        const currentTime = new Date().getTime();

        // Calculate the time difference in milliseconds
        const timeDifference = currentTime - lastVisitTimestamp;

        // Calculate the number of days
        const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

        if (daysDifference < 1) {
            // If less than a day, display a message
            showMessage("Back so soon! Awesome!");
        } else {
            // If more than a day, display the number of days
            showMessage(`You last visited ${daysDifference} ${daysDifference === 1 ? 'day' : 'days'} ago.`);
        }
    }

    // Update the 'lastVisit' entry in localStorage with the current timestamp
    localStorage.setItem('lastVisit', new Date().getTime());
});

function showMessage(message) {
    // Display the message in the sidebar
    document.getElementById('message').textContent = message;
}