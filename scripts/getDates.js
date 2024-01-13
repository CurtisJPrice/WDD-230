document.querySelector('#lastModified').textContent = "Last Modification: "+document.lastModified;

const rightNow = new Date();
//console.log(rightNow);
//console.log(rightNow.getFullYear());
document.querySelector('#year').textContent = rightNow.getFullYear();

// Navigation Stuff Here
const menubutton = document.querySelector("#menu-button");
const menuitems = document.querySelectorAll(".menu-item");

menubutton.addEventListener("click", () => {
	menuitems.forEach((item) => item.classList.toggle("open"));
	menubutton.classList.toggle("close");
});

// dark mode stuff here
const modeBtn = document.querySelector('#mode');
const theMainArea = document.querySelector('main')
modeBtn.addEventListener('click', () => {
console.log('clicked')
modeBtn.classList.toggle('dark')
theMainArea.classList.toggle('dark')
})

// visit count
const visitFeedback = document.querySelector('#visitCount');
let numVisits = localStorage.getItem("visits")
console.log(numVisits)
if (numVisits == null) {
visitFeedback.textContent = "You're a first timer"
localStorage.setItem("visits", 1);
} else {
numVisits++;
localStorage.setItem("visits", numVisits);
visitFeedback.innerHTML = `You have been here ${numVisits} times &#x1F440;`
}

//Form Validation
const rateDisplay = document.querySelector('#rating');
const rateSlider = document.querySelector('input[type=range]');
function displayRating() {
rateDisplay.innerHTML = rateSlider.value;
}
rateSlider.addEventListener('input', displayRating)

const user1 = document.querySelector('input[name=pass1]')
const user2 = document.querySelector('input[name=pass2]')
const matchMessage = document.querySelector('#feedback')
user2.addEventListener("focusout", matchCheck);
function matchCheck() {
if (user1.value !== user2.value) {
    matchMessage.textContent = "Usernames DO NOT MATCH"
    user2.value = "";
    user1.focus();
}
}// end function

const myBtn = document.querySelector('form button')
const myFormResults = document.querySelector('.results tbody')
const myForm = document.querySelector('form')

//stops the natural form submission and subsequent page refresh
document.querySelector("form").addEventListener("submit", function(e){
e.preventDefault()
});

myBtn.addEventListener('click', () => {
myFormResults.textContent = "";
const myName = document.querySelector('input[name=fname]')
addLines('Name:', myName.value)
const myEmail = document.querySelector('input[name=email]')
addLines('Email:', myEmail.value)
const myRange = document.querySelector('input[type=range]')
addLines('Rating:', myRange.value)
const myUser = document.querySelector('input[name=pass1]')
addLines('Username:', myUser.value)
})
function addLines(f,v) {
const newCell1 = document.createElement('td') 
newCell1.textContent = f
const newCell2 =document.createElement('td')
newCell2.textContent = v
const newrow = document.createElement('tr')
newrow.appendChild(newCell1)
newrow.appendChild(newCell2)
myFormResults.appendChild(newrow)
}

//Current Weather

const myAPI = "437209d363a4387bb2f5dffcea58bbee"
const myWeather = `//api.openweathermap.org/data/2.5/weather?zip=84653,us&appid=437209d363a4387bb2f5dffcea58bbee&units=imperial`
// ========== Grab the weather data and W A I T
fetch(myWeather)
.then((response) => response.json())
.then((allData) => {
    currentWeather(allData)
}) // end waiting

function currentWeather(weatherResults) {
console.log(weatherResults)
const myTemperature = document.querySelector('#temp')
myTemperature.textContent = weatherResults.main.temp
const myDescription = document.querySelector('#desc')
myDescription.textContent = weatherResults.weather[0].description
const myIcon = document.querySelector('#icon')
myIcon.src=`https://openweathermap.org/img/w/${weatherResults.weather[0].icon}.png`
myIcon.alt=weatherResults.weather[0].description
}