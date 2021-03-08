// FOR LOOPS
/*
Syntax Example

for (1st Statement; 2nd Statement; 3rd Statement){
    CODE TO BE LOOPED GOES HERE;
}
*/
// 1st statement only runs at the very beginning
// Code in for loop with run (1st loop)
// 3rd statement will run after each loop and then check to see if the 2nd statement is still true before looping again
// Loop will continue as long as the 2nd statement remains true

// Example 1 (Displays "There's no place like home" 3 times)
for (i = 1; i <= 3; i++){
    console.log(`There's no place like home`);
}
/*
let i = 1;
i++;
2
i++;
3
i++;
4
*/

console.log("====================");


// INFINITE LOOP (Do NOT run this)
/*
for (i = 1; i > 0; i++){
    console.log("THIS WOULD RUN FOREVER");
}
*/

// Example 2 (Counts from 1 to 5)
for (i = 1; i < 6; i++){
    console.log(i);
}
/*
let i = 1;
i++;
2
i++;
3
i++;
4
i++;
5
i++;
*/

console.log("====================");

// Example 3
for (i = 5; i >= 0; i--){
    console.log(i);
}
/*
let i = 5;
i--;
4
i--;
3
i--;
2
i--;
1
i--
0
i--;
*/

console.log("====================");


// Example 4 (Counts from 0 to 10 by 2)
for (i = 0; i <= 10; i += 2){
    console.log(i);
}
/*
let i = 0;
i+=;
2
i+=;
4
i+=;
6
i+=;
8
i+=;
10
i+=;
*/

console.log("====================");

// Example 5 (Counts from 1 to 25)
for (i = 1; i <= 25; i++){
    console.log(i);
}

console.log("====================");

// Example 6 (Loops through an array)
const topics = [
    `Terminal`,
    `HTML`,
    `CSS`,
    `SASS`,
    `Bootstrap`
];
for (i = 0; i < topics.length; i++){
    console.log(`${i + 1}. ${topics[i]}`);
};

console.log("====================");

// Example 7 (Nesting with For Loops)
for (i = 1; i <= 2; i++){
    console.log(`Outer Loop`);
    for (x = 1; x <= 3; x++){
        console.log(`Nested Loop`);
    }
}
