import React, { useEffect, useState } from "react";
import { getLiquidityPools } from "../../utils/penumbraAPI";

const LiquidityPools = () => {
  const [pools, setPools] = useState<any[]>([]);

  useEffect(() => {
    const fetchPools = async () => {
      const poolData = await getLiquidityPools();
      setPools(poolData);
    };

    fetchPools();
  }, []);

  return (
    <div className="liquidity-pools">
      <h2>Liquidity Pools</h2>
      <ul>
        {pools.map((pool, index) => (
          <li key={index}>
            Pool {pool.id}: {pool.amount} PEN
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LiquidityPools;
