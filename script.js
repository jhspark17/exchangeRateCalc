const currencyOne = document.getElementById("currency-one");
const currencyTwo = document.getElementById("currency-two");
const exchange = document.getElementById("exchange");


function getExchange() {
  console.log(currencyOne.value)
  console.log(currencyTwo.value)
  fetch(`https://api.exchangerate-api.com/v4/latest/${currencyOne.value}`)
  .then(res => res.json())
  .then(data => {
    console.log(data.rates[currencyTwo.value])
  })
}
//`https://api.exchangerate-api.com/v4/latest/${currency_one}`



currencyOne.addEventListener("change", getExchange);
currencyTwo.addEventListener("change", getExchange);

