import React, { useState } from "react";
import { receiveMessage } from "../../utils/cctp";

const CCTPReceive = () => {
  const [messageBytes, setMessageBytes] = useState<string>("");
  const [attestation, setAttestation] = useState<string>("");

  const handleReceive = async () => {
    await receiveMessage(messageBytes, attestation);
    alert("Message received!");
  };

  return (
    <div className="cctp-receive">
      <h2>CCTP Receive</h2>
      <input
        type="text"
        placeholder="Message Bytes"
        value={messageBytes}
        onChange={(e) => setMessageBytes(e.target.value)}
      />
      <input
        type="text"
        placeholder="Attestation"
        value={attestation}
        onChange={(e) => setAttestation(e.target.value)}
      />
      <button onClick={handleReceive}>Receive</button>
    </div>
  );
};

export default CCTPReceive;
