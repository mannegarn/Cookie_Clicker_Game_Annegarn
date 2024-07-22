// Get items from the DOM
const cookie_count_disp = document.getElementById("cookie_count_disp");
const cookie_multiplier_disp = document.getElementById(
  "cookie_multiplier_disp"
);

// A function to initialize the game!
function startGame() {
  console.log("Game started");

  // Check if the cookie_count is stored in the local storage
  if (localStorage.getItem("cookie_count") == null) {
    localStorage.setItem("cookie_count", 0);
  }
  // Read the cookie count from the local storage
  let cookie_count = parseInt(localStorage.getItem("cookie_count"));
  cookie_count_disp.textContent = cookie_count;
  console.log("cookie_count", cookie_count);

  // Check if cookie multiplier is stored in the local storage
  if (localStorage.getItem("cookie_multiplier") == null) {
    localStorage.setItem("cookie_multiplier", 1);
  }
  // Read the cookie multiplier from the local storage
  let cookie_multiplier = parseInt(localStorage.getItem("cookie_multiplier"));
  cookie_multiplier_disp.textContent = cookie_multiplier + " x";
  console.log("cookie_multiplier", cookie_multiplier);

  // Check if cookies per second is stored in the local storage
  if (localStorage.getItem("cookies_per_second") == null) {
    localStorage.setItem("cookies_per_second", 0);
  }
  // Read the cookies per second from the local storage
  let cookies_per_second = parseInt(localStorage.getItem("cookies_per_second"));
  cookies_per_second_disp.textContent = cookies_per_second + " cps";
  console.log("cookies_per_second", cookies_per_second);

  setInterval(auto_increment_cookie, 1000);
}

// A function to reset the game
function resetGame() {
  // prompt to confirm the reset
  let confirmReset = confirm(
    "Are you sure you want to reset the game? You will lose all your cookies and upgrades!"
  );
  if (confirmReset) {
    localStorage.setItem("cookie_count", 0);
    localStorage.setItem("cookie_multiplier", 1);
    localStorage.setItem("cookies_per_second", 0);
    startGame();
    window.location.reload();
  }
}

// A function to increment the cookie count by 1
function click_incrementCookieCount() {
  // read the cookie count from the local storage and convert to integer
  let cookie_count = parseInt(localStorage.getItem("cookie_count"));
  let cookie_multiplier = parseInt(localStorage.getItem("cookie_multiplier"));
  cookie_count += cookie_multiplier;
  cookie_count_disp.textContent = cookie_count;
  localStorage.setItem("cookie_count", cookie_count);
  console.log("cookie_count", cookie_count);
}

// A function to increment cookies automatically
function auto_increment_cookie() {
  let cookie_count = parseInt(localStorage.getItem("cookie_count"));
  let cookies_per_second = parseInt(localStorage.getItem("cookies_per_second"));
  cookie_count += cookies_per_second;
  cookie_count_disp.textContent = cookie_count;
  localStorage.setItem("cookie_count", cookie_count);
  console.log("cookie_count", cookie_count);
}

function CheckPrice(price) {
  let cookie_count = parseInt(localStorage.getItem("cookie_count"));
  if (cookie_count >= price) {
    return true;
  } else {
    return false;
  }
}

function BuyUpgrade(price) {
  let cookie_count = parseInt(localStorage.getItem("cookie_count"));
  cookie_count -= price;
  localStorage.setItem("cookie_count", cookie_count);
  cookie_count_disp.textContent = cookie_count;
}

function IncreaseMultiplier(factor) {
  let cookie_multiplier = parseInt(localStorage.getItem("cookie_multiplier"));
  cookie_multiplier = cookie_multiplier * factor;
  localStorage.setItem("cookie_multiplier", cookie_multiplier);
  cookie_multiplier_disp.textContent = cookie_multiplier + " x";
}

function IncreaseCps(amount) {
  let cookies_per_second = parseInt(localStorage.getItem("cookies_per_second"));
  cookies_per_second += amount;
  localStorage.setItem("cookies_per_second", cookies_per_second);
  cookies_per_second_disp.textContent = cookies_per_second + " cps";
}

export {
  startGame,
  resetGame,
  click_incrementCookieCount,
  auto_increment_cookie,
  IncreaseMultiplier,
  CheckPrice,
  BuyUpgrade,
  IncreaseCps,
};
