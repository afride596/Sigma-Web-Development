const BASE_URL =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

const dropdown = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
let fromcurr = document.querySelector(".from select");
let tocurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

for (let select of dropdown) {
  for (currCode in countryList) {
    let newoption = document.createElement("option");
    newoption.innerText = currCode;
    newoption.value = currCode;
    if (select.name === "from" && currCode === "USD") {
      newoption.selected = "selected";
    } else if (select.name === "to" && currCode === "INR") {
      newoption.selected = "selected";
    }
    select.append(newoption);
  }

  select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
  });
}
const updateFlag = (element) => {
  let currCode = element.value;

  let countrycode = countryList[currCode];
  let newsrc = `https://flagsapi.com/${countrycode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");

  img.src = newsrc;
};

btn.addEventListener("click", (evt) => {
  evt.preventDefault();
  updateExchnageRate();
});
const updateExchnageRate = async () => {
  let amount = document.querySelector(".amount input");
  let amountvalue = amount.value;
  // console.log(amountvalue);
  if (amountvalue === "" || amountvalue < 1) {
    amountvalue = 1;
    amount.value = "1";
  }
  // console.log(fromcurr.value,tocurr.value)
  const URL = `${BASE_URL}/${fromcurr.value.toLowerCase()}/${tocurr.value.toLowerCase()}.json`;
  let respond = await fetch(URL);
  let data = await respond.json();
  let rate = data[tocurr.value.toLowerCase()];
  console.log(rate);

  let finalAmount = amountvalue * rate;
  //   console.log(finalAmount);
  msg.innerText = `${amountvalue} ${fromcurr.value}=${finalAmount}${tocurr.value}`;
};

window.addEventListener("load", async () => {
  let amount = document.querySelector(".amount input");
  let amountvalue = amount.value;
  // console.log(amountvalue);
  if (amountvalue === "" || amountvalue < 1) {
    amountvalue = 1;
    amount.value = "1";
  }
  // console.log(fromcurr.value,tocurr.value)
  const URL = `${BASE_URL}/${fromcurr.value.toLowerCase()}/${tocurr.value.toLowerCase()}.json`;
  let respond = await fetch(URL);
  let data = await respond.json();
  let rate = data[tocurr.value.toLowerCase()];
  console.log(rate);

  let finalAmount = amountvalue * rate;
  //   console.log(finalAmount);
  msg.innerText = `${amountvalue} ${fromcurr.value} = ${finalAmount}${tocurr.value}`;
});
