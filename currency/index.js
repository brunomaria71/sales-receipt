// Project#1
const americanDollar = 1;
const europeanPound = 0.7744;

function calcCurrency(currency, convertingRates) {
    const results = currency * convertingRates
    return results 
}; 

const newMoney = calcCurrency(americanDollar, europeanPound);

console.log(newMoney.toFixed(2)); 

