const calculateTermDeposit = (
  starting_amount,
  interest_rate,
  investment_term,
  interest_paid
) => {
  if ((interest_rate < 0) | (investment_term < 0) | (starting_amount < 0)) {
    return null;
  } else if (interest_paid === "Maturity") {
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
