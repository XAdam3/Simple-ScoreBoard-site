const homeTotal = document.getElementById("home-points");
const guestTotal = document.getElementById("guest-points");

let countHome = 0;
let countGuest = 0;

function zeroHome() {
  countHome = 0;
  return (homeTotal.textContent = countHome);
}
function zeroGuest() {
  countGuest = 0;

  return (guestTotal.textContent = countGuest);
}

function addOneHome() {
  countHome += 1;

  return (homeTotal.textContent = countHome);
}

function addTwoHome() {
  countHome += 2;
  return (homeTotal.textContent = countHome);
}

function addThreeHome() {
  countHome += 3;
  return (homeTotal.textContent = countHome);
}

function addOneGuest() {
  countGuest += 1;
  return (guestTotal.textContent = countGuest);
}

function addTwoGuest() {
  countGuest += 2;
  return (guestTotal.textContent = countGuest);
}

function addThreeGuest() {
  countGuest += 3;
  return (guestTotal.textContent = countGuest);
}
