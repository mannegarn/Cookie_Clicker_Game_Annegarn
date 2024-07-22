//Import functions from function functions.js
import {
  startGame,
  resetGame,
  click_incrementCookieCount,
  auto_increment_cookie,
  IncreaseMultiplier,
  CheckPrice,
  BuyUpgrade,
  IncreaseCps,
} from "./functions.js";

// Get items from the DOM
//buttons
const cookie_button = document.getElementById("cookie_button");
const reset_button = document.getElementById("reset_button");
const x2_button = document.getElementById("x2_button");
const cps1_button = document.getElementById("cps1_button");
const cps10_button = document.getElementById("cps10_button");
const cps100_button = document.getElementById("cps100_button");

// Start the game when the page loads.
startGame();

// Event listener for the cookie button
cookie_button.addEventListener("click", () => {
  click_incrementCookieCount();
});

// Event listener for the reset button
reset_button.addEventListener("click", () => {
  resetGame();
});

//Event listener for x2 button that caLls the increaseMultiplier function
// with argument (factor =2)
x2_button.addEventListener("click", () => {
  let price = 10;
  if (CheckPrice(price) == false) {
    return;
  }
  BuyUpgrade(price);
  IncreaseMultiplier(2);
  console.log("x2 button clicked");
  // remove the button and make the background of the container green
  x2_button.remove();
  document.getElementById("2x_cont").style.backgroundColor = "green";
  document.getElementById("2x_cont").textContent = "2x purchased";
});

//Event listener for x3 button that caLls the increaseMultiplier function
// with argument (factor =2)
x3_button.addEventListener("click", () => {
  let price = 20;
  if (CheckPrice(price) == false) {
    return;
  }
  BuyUpgrade(price);
  IncreaseMultiplier(3);
  console.log("x2 button clicked");
  // remove the button and make the background of the container green
  x3_button.remove();
  document.getElementById("3x_cont").style.backgroundColor = "green";
  document.getElementById("3x_cont").textContent = "3x purchased";
});

x4_button.addEventListener("click", () => {
  let price = 30;
  if (CheckPrice(price) == false) {
    return;
  }
  BuyUpgrade(price);
  IncreaseMultiplier(4);
  console.log("x4 button clicked");
  // remove the button and make the background of the container green
  x4_button.remove();
  document.getElementById("4x_cont").style.backgroundColor = "green";
  document.getElementById("4x_cont").textContent = "4x purchased";
});

// Event listeners for the cps upgrades
cps1_button.addEventListener("click", () => {
  let price = 30;
  if (CheckPrice(price) == false) {
    return;
  }
  BuyUpgrade(price);
  // increase the cps by 1
  IncreaseCps(1);
  console.log("cps1 button clicked");
  // make the background green and increment upgrade count.
  document.getElementById("cps1_cont").style.backgroundColor = "green";
  // increment the quantity of the upgrade
  let quantity = parseInt(document.getElementById("quant_1").textContent);
  quantity += 1;
  document.getElementById("quant_1").textContent = quantity;
});

cps10_button.addEventListener("click", () => {
  let price = 300;
  if (CheckPrice(price) == false) {
    return;
  }
  BuyUpgrade(price);
  // increase the cps by 1
  IncreaseCps(10);
  console.log("cps1 button clicked");
  // make the background green and increment upgrade count.
  document.getElementById("cps10_cont").style.backgroundColor = "green";
  // increment the quantity of the upgrade
  let quantity = parseInt(document.getElementById("quant_10").textContent);
  quantity += 1;
  document.getElementById("quant_10").textContent = quantity;
});

cps100_button.addEventListener("click", () => {
  let price = 1000;
  if (CheckPrice(price) == false) {
    return;
  }
  BuyUpgrade(price);
  // increase the cps by 1
  IncreaseCps(100);
  // make the background green and increment upgrade count.
  document.getElementById("cps100_cont").style.backgroundColor = "green";
  // increment the quantity of the upgrade
  let quantity = parseInt(document.getElementById("quant_100").textContent);
  quantity += 1;
  document.getElementById("quant_100").textContent = quantity;
});
