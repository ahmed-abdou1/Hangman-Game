const easyWords = [
    "Cat", "Dog", "Sun", "Car", "Hat",
    "Tree", "Ball", "Book", "Moon", "Bed",
    "Duck", "Cake", "Rain", "Fish", "House",
    "Bird", "Frog", "Bear", "Boat", "Star",
    "Chair", "Duck", "Apple", "Door", "Lamp"
];

// Medium Difficulty Words
const mediumWords = [
    "Banana", "Guitar", "Laptop", "Elephant", "Turtle",
    "Orange", "Bicycle", "Camera", "Penguin", "Dragon",
    "Monkey", "Tiger", "Rabbit", "Dolphin", "Unicorn",
    "Robot", "Spider", "Castle", "Butterfly", "Volcano",
    "Giraffe", "Telescope", "Sandwich", "Rocket", "Elephant"
];

const hardWords = [
    "Encyclopedia", "Symphony", "Pterodactyl", "Entrepreneur", "Perpendicular",
    "Mind Games", "Wild Goose Chase", "Burning Bridges", "Crossroads", "Skeleton Key",
    "Grain of Salt", "Two Birds One Stone", "Water Under the Bridge", "Silver Lining", "Cold Turkey",
    "Quintessential", "Discombobulation", "Sophistication", "Labyrinth", "Metamorphosis",
    "Incomprehensibility", "Serendipity", "Extemporaneous", "Inconceivably", "Magnanimous"
];


function selectRandomWordEasy() {
    const randomIndex = Math.floor(Math.random() * easyWords.length);
    return easyWords[randomIndex];
}

word = selectRandomWordEasy().toUpperCase();

points = 0;

wordDiv = document.getElementById("word-container");

function createWord(word) {
    // Select the container
    var container = document.querySelector('.word');

    // Iterate through each letter of the word
    for (var i = 0; i < word.length; i++) {
        // Create a new div with the class "flex-container"
        var flexContainer = document.createElement('div');
        flexContainer.className = 'flex-container';

        // Create a span for the letter
        var letterSpan = document.createElement('span');
        if (word[i] === ' ') {
            letterSpan.innerHTML = '&nbsp;&nbsp;&nbsp;';
            flexContainer.appendChild(letterSpan);
        } else {  
            letterSpan.textContent = word[i];
            // Create a u element for the underline
            var underline = document.createElement('u');
            // Append the underline to the flex container
            flexContainer.appendChild(letterSpan);
            flexContainer.appendChild(underline);
        }

        // Append the flex container to the word container
        container.appendChild(flexContainer);
    }
}

createWord(word);


//Generate Buttons

// Select the container
var buttonCenter = document.getElementById('button-center');

// Array of alphabet letters
var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

// Loop through each letter
for (var i = 0; i < alphabet.length; i++) {
    // Create a button element
    var button = document.createElement('button');
    
    // Set the text content to the current letter (capitalized)
    button.textContent = alphabet[i];
    
    // Add classes to the button
    button.className = 'button-design';
    
    // Append the button to the button center container
    buttonCenter.appendChild(button);
}

const letter = document.querySelectorAll('.button-design');

for (let i = 0; i < letter.length; i++) {
    letter[i].addEventListener('click', function() {
        findLetter(letter[i].innerHTML);
        letter[i].disabled = true;
        letter[i].style.backgroundColor = 'gray'; // Change background color
        letter[i].style.cursor = 'not-allowed'; // Change cursor
        console.log(letter[i]);
    })
}

function findLetter(letter) {
    letterFound = false;
    for (let i = 0; i < word.length; i++) {
        if (letter == word[i]) {
            letterFound = true;
            searchWordWithLetter(letter);
        } else if (i == word.length - 1 && letter != word[i] && letterFound == false) {
            losePoints();
        }
    }
}

function searchWordWithLetter(letter) {
    // Get all elements with the class "word"
    let wordElements = document.querySelectorAll('.word');

    // Loop through each element with the class "word"
    wordElements.forEach(wordElement => {
        // Get all <span> elements inside the current wordElement
        let spanElements = wordElement.querySelectorAll('span');

        // Loop through each <span> element
        spanElements.forEach(spanElement => {
            if (spanElement.textContent == letter) {
                spanElement.classList.add("showLetter");
            }
        });
    });
}

function losePoints() {
    points += 1;
    if (points < 7) {
        document.getElementById("point-" + points).style = "visibility: visible;"
    }
}

document.getElementById("submit-btn").addEventListener('click', function() {
    wordGuessed = document.getElementById("input-guess-box").value.trim();
    if (wordGuessed.toUpperCase() == word) {
        let wordElements = document.querySelectorAll('.word');
        // Loop through each element with the class "word"
        wordElements.forEach(wordElement => {
            // Get all <span> elements inside the current wordElement
            let spanElements = wordElement.querySelectorAll('span');
    
            // Loop through each <span> element
            spanElements.forEach(spanElement => {
                spanElement.classList.add("showLetter");
            });
        });
    } else if (wordGuessed.toUpperCase != word) {
        losePoints();
    }
})