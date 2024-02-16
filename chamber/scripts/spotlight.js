//Member Spotlight
const url = 'data/members.json';
async function getMembers() {
const response = await fetch(url);
const data = await response.json();
const allMembers = data.members
  //console.log(allMembers)
const specialMembers = data.members.filter(x => x.level > 1);
displayMembers(specialMembers)
}

getMembers();

const displayMembers = (spotList) => {
for (let i = 0; i < 3; i++) {
    //console.log(spotList)
    //console.log(spotList.length)
    randomSpot = Math.floor(Math.random() * spotList.length);
    //console.log(randomSpot)
    selectedSpot = spotList[randomSpot]
    spotList.splice(randomSpot, 1);
    //console.log(selectedSpot)
    //console.log(spotList)
    displaySpot(selectedSpot)
}
}


const spotCards = document.querySelector('#cards')
function displaySpot(x) {
  //console.log(x)
const mySpot = document.createElement('section')
mySpot.className = "spot"
const myHeader = document.createElement('span')
myHeader.textContent = "SPOTLIGHT"
const myCompany = document.createElement('h2');
myCompany.textContent = x.name;
const myLogo = document.createElement('logo');
myLogo.src = `images/${x.logo}`;
myLogo.alt = x.name;
document.body.appendChild(myLogo);
const myURL = document.createElement('a')
myURL.textContent = "Visit Sponsor"
myURL.href = x.url
myURL.target = "_blank"

mySpot.appendChild(myHeader)
mySpot.appendChild(myCompany)
mySpot.appendChild(myLogo)
mySpot.appendChild(myURL)
spotCards.appendChild(mySpot)
}