import React, { useState } from "react";
import { delegateTokens } from "../../utils/penumbraAPI";

const Delegation = () => {
  const [validator, setValidator] = useState<string>("");
  const [amount, setAmount] = useState<string>("");

  const handleDelegate = async () => {
    await delegateTokens(validator, amount);
    alert(`Delegated ${amount} PEN to ${validator}`);
  };

  return (
    <div className="delegation">
      <h2>Delegate Tokens</h2>
      <input
        type="text"
        placeholder="Validator Address"
        value={validator}
        onChange={(e) => setValidator(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handleDelegate}>Delegate</button>
    </div>
  );
};

export default Delegation;
