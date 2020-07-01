const currencyOne = document.getElementById("currency-one");
const currencyTwo = document.getElementById("currency-two");
const amountOne = document.getElementById("amount-one");
const amountTwo = document.getElementById("amount-two");
const exchange = document.getElementById("exchange");
const swap = document.getElementById("swap")

function getExchange() {
  fetch(`https://api.exchangerate-api.com/v4/latest/${currencyOne.value}`)
  .then(res => res.json())
  .then(data => {
    exchange.innerHTML = `${data.rates[currencyOne.value]} ${currencyOne.value} = ${data.rates[currencyTwo.value]} ${currencyTwo.value}`;
    amountTwo.value = amountOne.value * data.rates[currencyTwo.value]
  })
}

function swapValues(){
  let temp = currencyOne.value;
  currencyOne.value = currencyTwo.value;
  currencyTwo.value = temp;
  getExchange();
}


currencyOne.addEventListener("change", getExchange);
currencyTwo.addEventListener("change", getExchange);
amountOne.addEventListener("input", getExchange);
swap.addEventListener('click', swapValues)
getExchange();


