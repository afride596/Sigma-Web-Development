// let letters = [
//   "0",
//   "1",
//   "2",
//   "3",
//   "4",
//   "5",
//   "6",
//   "7",
//   "8",
//   "9",
//   "A",
//   "B",
//   "C",
//   "D",
//   "E",
//   "F",
// ];
// 6 digit representation  of color as hex code
function randomcolorGenrator() {
  let letters = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];
  let colorr = "#";
  for (let value = 0; value < 6; value++) {
    let randomcolor = Math.floor(Math.random() * 16);
    colorr += letters[randomcolor];
  }
  return colorr;
}

document.querySelectorAll(".box").forEach((e) => {
  e.style.backgroundColor = randomcolorGenrator();
  e.style.color = randomcolorGenrator();
});
