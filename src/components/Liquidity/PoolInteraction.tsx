import React, { useState } from "react";
import { interactWithPool } from "../../utils/penumbraAPI";

const PoolInteraction = () => {
  const [poolId, setPoolId] = useState<string>("");
  const [action, setAction] = useState<string>("add");
  const [amount, setAmount] = useState<string>("");

  const handleInteraction = async () => {
    await interactWithPool(poolId, action, amount);
    alert(`${action} operation completed for pool ${poolId}`);
  };

  return (
    <div className="pool-interaction">
      <h2>Interact with Liquidity Pool</h2>
      <input
        type="text"
        placeholder="Pool ID"
        value={poolId}
        onChange={(e) => setPoolId(e.target.value)}
      />
      <select value={action} onChange={(e) => setAction(e.target.value)}>
        <option value="add">Add Liquidity</option>
        <option value="remove">Remove Liquidity</option>
      </select>
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handleInteraction}>Submit</button>
    </div>
  );
};

export default PoolInteraction;
