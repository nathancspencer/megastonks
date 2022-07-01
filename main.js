const data = [];
const output = [];

// User Inputs
// 1. How much they invest each period.
// 2. How often they invest (in weeks).
// 3. Their expected annual return as a percentage.
const investment = 1;
const period = 1;
const expectedReturn = 100;

const broker1 = {
    'buyingFee': 0,
    'sellingFee': 0,
    'transactionFee': 0,
    'totalFees': 0,
}
const broker2 = {
    'buyingFee': 0,
    'sellingFee': 0,
    'transactionFee': 0,
    'totalFees': 0,
}
const broker3 = {
    'buyingFee': 0,
    'sellingFee': 0,
    'transactionFee': 0,
    'totalFees': 0,
}

data.push(broker1);
data.push(broker2);
data.push(broker3);

const periods = 52 / period;
const returnPerPeriod = Math.exp(Math.log(expectedReturn/100 + 1) / periods);

let totalValue = 0;
for (let i = 1; i <= periods; i++) {
    totalValue += investment * (returnPerPeriod)**i;
}

otherTotal = investment * returnPerPeriod * (returnPerPeriod**periods - 1) / (returnPerPeriod - 1)

console.log(totalValue);
console.log(otherTotal);