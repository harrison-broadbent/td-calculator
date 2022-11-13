import { useState } from "react";
import calculateTermDeposit from "../lib /calculateTermDeposit";

export default function Calculator() {
  const [formInfo, setFormInfo] = useState({
    starting_amount: "10000",
    interest_rate: "5.0",
    investment_term: "36",
    interest_paid: "Quarterly",
  });

  const [finalBalance, setFinalBalance] = useState(0);

  const handleChange = (event) => {
    setFormInfo({ ...formInfo, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    // prevents the submit button from refreshing the page
    event.preventDefault();
    setFinalBalance(
      calculateTermDeposit(
        formInfo.starting_amount,
        formInfo.interest_rate,
        formInfo.investment_term,
        formInfo.interest_paid
      )
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-8">
        <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-4">
          <div className="sm:col-span-2">
            <label
              htmlFor="Starting Amount"
              className="block text-sm font-medium text-gray-700"
            >
              Starting Amount ($)
            </label>
            <div className="mt-1">
              <input
                type="number"
                id="starting_amount"
                className="block w-full rounded-sm shadow-sm  p-1.5"
                placeholder="10000"
                min="0"
                value={formInfo.starting_amount}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="interest_rate"
              className="block text-sm font-medium text-gray-700"
            >
              Interest Rate (%)
            </label>
            <div className="mt-1">
              <input
                type="number"
                id="interest_rate"
                className="block w-full rounded-sm shadow-sm  p-1.5"
                placeholder="4.5"
                min="0"
                value={formInfo.interest_rate}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-4">
          <div className="sm:col-span-2">
            <label
              htmlFor="investment_term"
              className="block text-sm font-medium text-gray-700"
            >
              Investment Term (months)
            </label>
            <div className="mt-1">
              <input
                type="number"
                id="investment_term"
                className="block w-full rounded-sm shadow-sm  p-1.5"
                placeholder="36"
                min="0"
                value={formInfo.investment_term}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="interest_paid"
              className="block text-sm font-medium text-gray-700"
            >
              Interest Paid
            </label>
            <div className="mt-1">
              <select
                id="interest_paid"
                className="block w-full rounded-sm shadow-sm  p-2"
                value={formInfo.interest_paid}
                onChange={handleChange}
              >
                <option value="Monthly">Monthly</option>
                <option value="Quarterly">Quarterly</option>
                <option value="Annually">Annually</option>
                <option value="Maturity">At Maturity</option>
              </select>
            </div>
          </div>
        </div>

        <div className="w-full">
          <p className="font-bold">Final Balance: </p>
          <p
            className="text-center font-black tracking-tighter text-3xl text-ferocia-purple underline"
            id="final_balance"
          >
            {" "}
            ${(Math.round(finalBalance * 100) / 100).toLocaleString()}
          </p>
        </div>

        {/* Calculate button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className=" inline-flex justify-end items-center rounded-md border border-transparent bg-ferocia-purple px-3 py-2 text-sm font-black text-white shadow-sm hover:bg-ferocia-purple/90 "
          >
            Calculate
          </button>
        </div>
      </div>
    </form>
  );
}
