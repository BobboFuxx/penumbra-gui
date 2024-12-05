import React, { useState } from "react";
import { depositForBurn } from "../../utils/cctp";

const CCTPDeposit = () => {
  const [amount, setAmount] = useState<number>(0);
  const [destination, setDestination] = useState<string>("");

  const handleDeposit = async () => {
    await depositForBurn(amount, destination);
    alert("Deposit for burn completed!");
  };

  return (
    <div className="cctp-deposit">
      <h2>CCTP Deposit</h2>
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
      />
      <input
        type="text"
        placeholder="Destination Address"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
      />
      <button onClick={handleDeposit}>Deposit</button>
    </div>
  );
};

export default CCTPDeposit;
