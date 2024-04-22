let pizzaPlace = "Omni's";
//oni, pepp, chx, hb, chz,
let numberOfToppings = 5;
console.log(pizzaPlace, numberOfToppings);
console.log(typeof pizzaPlace, typeof numberOfToppings);
let message = `Today is Thursday`;
const placeSentence = `I found a new pizza place called ${pizzaPlace}`;
const topSentence = `Because they don't sell pork they have ${numberOfToppings} toppings.`;
console.log(placeSentence, topSentence);
if (numberOfToppings < 10) {
  console.log("Quality not quantity");
} else if (numberOfToppings >= 10) {
  console.log("A whole not of pizza");
}
