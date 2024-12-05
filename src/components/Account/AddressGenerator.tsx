import React, { useState } from "react";
import { generateAddress } from "../../utils/keyManagement";

const AddressGenerator = () => {
  const [address, setAddress] = useState<string>("");

  const handleGenerateAddress = () => {
    const newAddress = generateAddress();
    setAddress(newAddress);
  };

  return (
    <div className="address-generator">
      <h2>Generate Address</h2>
      <button onClick={handleGenerateAddress}>Generate</button>
      {address && <p>Your Address: {address}</p>}
    </div>
  );
};

export default AddressGenerator;
