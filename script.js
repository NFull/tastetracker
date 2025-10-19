console.log("Hello World!");
// 1. Create an array called favoriteFoods with at least 6 foods you love.
let favoriteFoods = ["Sushi", "Pasta", "Pho", "Tacos", "Queso", "Salad"];


// 2. Loop through the list and print: "One of my favorite foods is ______."
for (let i = 0; i < favoriteFoods.length; i++) {
  console.log("One of my favorite foods is " + favoriteFoods[i]);
};






// 3. Print out the rating for each food with a ranking like:
// "My #1 favorite food is Ramen" (copy/paste for all items)
// "My #2 favorite food is Sushi"
// ...etc.
for (let i = 1; i <= favoriteFoods.length; i++) {
  console.log("My #" + i + " food is " + favoriteFoods[i - 1]);
};



// 4a. Create a function printFoodRecommendation(foodName) that prints out the following for the foodName provided
    // "Have you ever tried ____?"
    // "I always recommend ____ to friends."
    // "Trust me — ____ is delicious."
function printFoodRecommendation(foodName) {
  console.log("Have you tried " + foodName + "?");
  console.log("I always recommend " + foodName + " to friends.");
  console.log("Trust me - " + foodName + " is delicious.");
};



// 4b. Call the function at least 3 times
console.log(printFoodRecommendation("Ramen"));
console.log(printFoodRecommendation("Salsa"));
console.log(printFoodRecommendation("Pho"));


// Here's a list of 50 friends' favorite foods:
let friendFavorites = [
    "Pizza", "Sushi", "Pasta", "Falafel", "Burgers", "Ramen", "Pad Thai", "Curry", "Pho", "Nachos", "Gnocchi", "Donuts", "Steak", "Lasagna", "Biryani", "Tacos", "Croissant", "Churros", "Fried Rice", "Shawarma", "Miso Soup", "BBQ Ribs", "Hotpot", "Enchiladas", "Baklava", "Gyros", "Hummus", "Empanadas", "Pancakes", "Muffins", "Samosas", "Macarons", "Quiche", "Pierogi", "Arepas", "Okonomiyaki", "Ceviche", "Brisket", "Bao Buns", "Poutine", "Clam Chowder", "Fajitas", "Canelé", "Kimchi", "Tamales", "Omelette", "Biscuits", "Tempura", "Spring Rolls", "Crepes"
  ];

// 5. Print out only foods that have an "a" in the name. For example, "Pizza" would not be included, but "Pasta" would be.
for (let i = 0; i < friendFavorites.length; i++) {
  if (friendFavorites[i].includes("a") || friendFavorites[i].includes("A")) {
    console.log(friendFavorites[i]);
  }
};


// 6. Store the result in an array called foodsWithA. Print out the array.
let foodsWithA = [];

for (let i = 0; i < friendFavorites.length; i++) {
  if (friendFavorites[i].includes("a") || friendFavorites[i].includes("A")) {
    foodsWithA.push(friendFavorites[i]);
  }
};

console.log(foodsWithA);

// 7. Create a new array longFoodNames for foods with names longer than 6 characters.
longFoodNames = [];

for (let i = 0; i < friendFavorites.length; i++) {
  if (friendFavorites[i].length > 6) {
    longFoodNames.push(friendFavorites[i]);
  }
};


// 8. Create another array shortFoodNames for foods 6 characters or shorter.
shortFoodNames = [];

for (let i = 0; i < friendFavorites.length; i++) {
  if (friendFavorites[i].length <= 6) {
    shortFoodNames.push(friendFavorites[i]);
  }
};


// 9. Print both arrays and compare:
// "There are more long-named foods." OR "There are more short-named foods."
console.log(longFoodNames);
console.log(shortFoodNames);

console.log("There are more long-named foods.");


// 10. STRETCH: Find the longest food name and print:
// "The longest food name in the list is ______ with ___ characters."
let longestName = friendFavorites[0];

for (let i = 1; i < friendFavorites.length; i++) {
  if (friendFavorites[i].length > longestName.length) {
    longestName = friendFavorites[i];
  }
}

console.log("The longest food name in the list is " + longestName + " with " + longestName.length + " characters.");