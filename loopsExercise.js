// 1
for (i = 1; i <= 7; i++) {
    console.log(i);
}

// 2
for (i = 5; i <= 25; i+=4) {
    console.log(i);
}

// 3a
const wizards = [
    "Harry Potter",
    "Hermione Granger",
    "Ron Weasley"
]

// 3b
for (names of wizards){
    console.log(names);
}

// 4a
let harryPotterMovies = 0

// 4b
while (harryPotterMovies <= 8){
    console.log(harryPotterMovies);
    harryPotterMovies++;
}

// OR
// while (true){
//     harryPotterMovies++;
//     console.log();
//     if (harryPotterMovies ====8){
//         break;
//     }
// }

// 5a
const hogwartsHouses = [
    "Gryffindor",
    "Hufflepuff",
    "Ravenclaw",
    "Slytherin"
]

// 5b
for (houses of hogwartsHouses){
    for (chr of houses){
        console.log(chr);
}
}

// 6a
const quote = [
    "Yer",
    "A",
    "Wizard",
    "Harry"
]


// 6b
let fullQuote = "";
for (word of quote){
    fullQuote += `${word}`
}
fullQuote = fullQuote.trim();
console.log(fullQuote);
