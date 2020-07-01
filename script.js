const currencyOne = document.getElementById("currency-one");
const currencyTwo = document.getElementById("currency-two");
const amountOne = document.getElementById("amount-one");
const amountTwo = document.getElementById("amount-two");
const exchange = document.getElementById("exchange");


function getExchange() {
  console.log(currencyOne.value)
  console.log(currencyTwo.value)
  console.log(amountOne.value);
  console.log(amountTwo.value);
  fetch(`https://api.exchangerate-api.com/v4/latest/${currencyOne.value}`)
  .then(res => res.json())
  .then(data => {
    exchange.innerHTML = `${data.rates[currencyOne.value]} ${currencyOne.value} = ${data.rates[currencyTwo.value]} ${currencyTwo.value}`;
    amountTwo.value = amountOne.value * data.rates[currencyTwo.value]
  })
}



currencyOne.addEventListener("change", getExchange);
currencyTwo.addEventListener("change", getExchange);
amountOne.addEventListener("input", getExchange);


