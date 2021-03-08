// FOR OF LOOP (Loop that iterates through a value)
/*
Syntax Example

for (index of iterableValue){
    CODE BE RUN GOES HERE;
}
*/
// Strings and Arrays are values that can be iterated through. Cannot iterate through Objects.

// Example 1
const pizza = `I love pizza!`;

for (char of pizza){
    // Runs this console log for the value at each index of the pizza string variable. The value of each index is plugged into the index called char for each time through the loop.
    console.log(char);
}

// Example 2
const pizzaChains = [
    `Papa Johns`,
    `Little Caesars`,
    `Godfathers`,
    `Pizza Hut`,
    `Dominos`
];

for (item of pizzaChains){
    // Displays the string/value at each index of the pizzaChains array each time through the loop
    console.log(item);
}

// Example 3
const pizzaToppings = [
    [`Bacon`, `Sausage`, `Ham`],
    [`Banana Peppers`, `Olives`, `Mushrooms`],
    [`Stuffed`, `Hand Tossed`, `Thin`]
];

for (category of pizzaToppings){
    console.log(category);
    for (topping of pizzaToppings[category])
}