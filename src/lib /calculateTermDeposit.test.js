// calculateTermDeposit.test
// Tests for the TD interest calculation function

import calculateTermDeposit from "./calculateTermDeposit";

/////////////////
// At Maturity //
/////////////////
test("10000 starting, 1.1% IR, 3yrs paid at maturity gives 10330", () => {
  const interest = calculateTermDeposit("10000", "1.1", "36", "Maturity");
  expect(interest).toBe(10330);
});

test("1,000,000 starting, 5% IR, 5yrs paid at maturity gives 1,250,000", () => {
  const interest = calculateTermDeposit("1000000", "5", "60", "Maturity");
  expect(interest).toBe(1250000);
});

test("50,000 starting, 0% IR, 5yrs paid at maturity gives 50,000", () => {
  const interest = calculateTermDeposit("50000", "0", "60", "Maturity");
  expect(interest).toBe(50000);
});

//////////////
// Annually //
//////////////
test("10000 starting, 1.1% IR, 3.5yrs paid annually gives 10390", () => {
  const interest = calculateTermDeposit("10000", "1.1", "42", "Annually");
  expect(Math.round(interest)).toBe(10390);
});

test("1,000,000 starting, 5% IR, 0.25yrs paid annually gives 1,012,272", () => {
  const interest = calculateTermDeposit("1000000", "5", "3", "Annually");
  expect(Math.round(interest)).toBe(1012272);
});

test("50,000 starting, 0% IR, 5yrs paid annually gives 50,000", () => {
  const interest = calculateTermDeposit("50000", "0", "60", "Annually");
  expect(interest).toBe(50000);
});

///////////////
// Quarterly //
///////////////
test("10000 starting, 1.1% IR, 3.5yrs paid quarterly gives 10392", () => {
  const interest = calculateTermDeposit("10000", "1.1", "42", "Quarterly");
  expect(Math.round(interest)).toBe(10392);
});

test("1,000,000 starting, 5% IR, 0.25yrs paid quarterly gives 1,012,500", () => {
  const interest = calculateTermDeposit("1000000", "5", "3", "Quarterly");
  expect(Math.round(interest)).toBe(1012500);
});

test("50,000 starting, 0% IR, 5yrs paid quarterly gives 50,000", () => {
  const interest = calculateTermDeposit("50000", "0", "60", "Quarterly");
  expect(interest).toBe(50000);
});

/////////////
// Monthly //
/////////////
test("10000 starting, 1.1% IR, 3.5yrs paid monthly gives 10392", () => {
  const interest = calculateTermDeposit("10000", "1.1", "42", "Monthly");
  expect(Math.round(interest)).toBe(10392);
});

test("1,000,000 starting, 5% IR, 0.25yrs paid quarterly gives 1,012,552", () => {
  const interest = calculateTermDeposit("1000000", "5", "3", "Monthly");
  expect(Math.round(interest)).toBe(1012552);
});

test("50,000 starting, 0% IR, 5yrs paid monthly gives 50,000", () => {
  const interest = calculateTermDeposit("50000", "0", "60", "Monthly");
  expect(interest).toBe(50000);
});

////////////////
// Edge cases //
////////////////

// Negative values —
test("-1 starting, -1% IR, -1yrs paid monthly gives null", () => {
  const interest = calculateTermDeposit("-1", "-1", "-12", "Monthly");
  expect(interest).toBe(null);
});
