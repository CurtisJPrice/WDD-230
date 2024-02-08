const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

const cards = document.querySelector('#cards');

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.prophets); // temporary testing of data retreival
    displayProphets(data.prophets);
}

getProphetData();


// Function expression to display prophets in cards
const displayProphets = (prophets) => {
prophets.forEach((prophet) => {
    // Create elements to add to the div.cards element
    let card = document.createElement('section');
    let fullName = document.createElement('h2');
    let birthdate = document.createElement('h3');
    let birthplace = document.createElement('h3');
    let portrait = document.createElement('img');

    // Build the h2 content to show the prophet's full name
    fullName.textContent = `${prophet.name} ${prophet.lastname}`;
    birthdate.textContent = `${prophet.birthdate}`;
    birthplace.textContent = `${prophet.birthplace}`;

    

    // Build the image portrait by setting attributes
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('width', '340');
    portrait.setAttribute('height', '440');

    // Append the section(card) with the created elements
    card.appendChild(fullName);
    card.appendChild(birthdate);
    card.appendChild(birthplace);
    card.appendChild(portrait);

    // Append the card to the "cards" div
    cards.appendChild(card);
});
};