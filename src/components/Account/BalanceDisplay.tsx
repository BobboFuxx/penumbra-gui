import React, { useEffect, useState } from "react";
import { getBalance } from "../../utils/penumbraAPI";

const BalanceDisplay = () => {
  const [balance, setBalance] = useState<string>("");

  useEffect(() => {
    const fetchBalance = async () => {
      const userBalance = await getBalance();
      setBalance(userBalance);
    };

    fetchBalance();
  }, []);

  return (
    <div className="balance-display">
      <h2>Your Balance</h2>
      <p>{balance} UM</p>
    </div>
  );
};

export default BalanceDisplay;
