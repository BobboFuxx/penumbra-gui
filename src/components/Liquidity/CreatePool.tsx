import React, { useState } from "react";
import { createLiquidityPool } from "../../utils/penumbraAPI";

const CreatePool = () => {
  const [token1, setToken1] = useState<string>("");
  const [token2, setToken2] = useState<string>("");

  const handleCreate = async () => {
    await createLiquidityPool(token1, token2);
    alert("Liquidity pool created!");
  };

  return (
    <div className="create-pool">
      <h2>Create Liquidity Pool</h2>
      <input
        type="text"
        placeholder="Token 1"
        value={token1}
        onChange={(e) => setToken1(e.target.value)}
      />
      <input
        type="text"
        placeholder="Token 2"
        value={token2}
        onChange={(e) => setToken2(e.target.value)}
      />
      <button onClick={handleCreate}>Create</button>
    </div>
  );
};

export default CreatePool;
