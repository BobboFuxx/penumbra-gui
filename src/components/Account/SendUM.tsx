import React, { useState } from "react";
import { sendTransaction } from "../../utils/penumbraAPI";

const SendPenumbra = () => {
  const [recipient, setRecipient] = useState<string>("");
  const [amount, setAmount] = useState<string>("");

  const handleSend = async () => {
    await sendTransaction(recipient, amount);
    alert("Transaction sent!");
  };

  return (
    <div className="send-penumbra">
      <h2>Send UM</h2>
      <input
        type="text"
        placeholder="Recipient Address"
        value={recipient}
        onChange={(e) => setRecipient(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
};

export default SendPenumbra;
