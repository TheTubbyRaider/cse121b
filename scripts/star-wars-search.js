const characterList = document.getElementById('characterList');
const charactersPerPage = 20; // Number of characters to display per page
const totalCharacters = 120; // Total number of characters
let currentIndex = 0; // Current index of displayed characters

function displayCharacters(startIndex) {
    characterList.innerHTML = ''; // Clear the character list

    for (let i = startIndex; i < startIndex + charactersPerPage; i++) {
        if (i >= characters.length) {
            break; // Stop when all characters are displayed
        }

        const character = characters[i];
        const listItem = document.createElement('li');
        const characterLink = document.createElement('a');
        characterLink.textContent = character.name;
        characterLink.href = `javascript:void(0);`;
        characterLink.addEventListener('click', () => displayCharacterStats(character));
        listItem.appendChild(characterLink);
        characterList.appendChild(listItem);
    }
}

function displayCharacterStats(character) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <h2>${character.name}</h2>
        <p>Birth Year: ${character.birth_year}</p>
        <p>Gender: ${character.gender}</p>
        <p>Height: ${character.height} cm</p>
        <p>Mass: ${character.mass} kg</p>
    `;
}

// Fetch all characters on page load
fetchAllCharacters();

let characters = []; // Array to store all characters

function fetchAllCharacters() {
    const urls = [];

    // Generate the API URLs for all pages
    for (let i = 1; i <= Math.ceil(totalCharacters / charactersPerPage); i++) {
        urls.push(`https://swapi.dev/api/people/?page=${i}`);
    }

    // Fetch characters from all pages
    Promise.all(urls.map(url => fetch(url).then(response => response.json())))
        .then(pages => {
            pages.forEach(page => {
                page.results.forEach(character => {
                    characters.push(character);
                });
            });

            // Start by displaying the first set of characters
            displayCharacters(currentIndex);
        })
        .catch(error => {
            console.error('An error occurred:', error);
        });
}

// Function to cycle to the next set of characters
function cycleNext() {
    currentIndex += charactersPerPage;
    if (currentIndex >= characters.length) {
        currentIndex = 0;
    }
    displayCharacters(currentIndex);
}

// Function to cycle to the previous set of characters
function cyclePrevious() {
    currentIndex -= charactersPerPage;
    if (currentIndex < 0) {
        currentIndex = characters.length - charactersPerPage;
    }
    displayCharacters(currentIndex);
}

// Function to search for characters
function searchCharacter() {
    const characterName = document.getElementById('search').value.toLowerCase();
    const searchResults = characters.filter(character =>
        character.name.toLowerCase().includes(characterName)
    );
    if (searchResults.length === 0) {
        document.getElementById('result').textContent = 'Character not found.';
    } else {
        currentIndex = 0; // Reset the current index
        characters = searchResults;
        displayCharacters(currentIndex);
    }
}

document.getElementById('searchButton').addEventListener('click', searchCharacter);
document.getElementById('cycleNextButton').addEventListener('click', cycleNext);
document.getElementById('cyclePreviousButton').addEventListener('click', cyclePrevious);
