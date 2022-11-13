// calculateTermDeposit:Number
// returns a Number equal to the final balance of the term deposit, given the input parameters
//
// starting_amount:String — initial balance
// interest_rate:String   - annual interest rate of the TD
// investment_term:String - length of the investment in months
// interest_paid:String   - the period of interest payment, one of - [Monthly, Quarterly, Annually, At Maturity]
// Notes:
//  - values are all strings since the form response is all string values
//  - returned value is not rounded and may have many decimal values
const calculateTermDeposit = (
  starting_amount,
  interest_rate,
  investment_term,
  interest_paid
) => {
  if ((interest_rate < 0) | (investment_term < 0) | (starting_amount < 0)) {
    // negative values should already be prevented in the HTML form
    // if for some reason they pass through, detect them and return null
    return null;
  } else if (interest_paid === "Maturity") {
    // interest paid at maturity foregoes compounding and is treated separately
    return (
      Number(starting_amount) +
      (starting_amount * (interest_rate / 100) * investment_term) / 12
    );
  } else {
    const period =
      interest_paid === "Monthly" ? 12 : interest_paid === "Quarterly" ? 4 : 1;
    return (
      starting_amount *
      Math.pow(
        1 + interest_rate / 100.0 / period,
        investment_term / (12 / period)
      )
    );
  }
};

module.exports = calculateTermDeposit;
