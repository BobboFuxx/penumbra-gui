import React, { useState } from "react";
import { generateStealthAddress } from "../../utils/keyManagement";

const StealthAddressGenerator = () => {
  const [stealthAddress, setStealthAddress] = useState<string>("");
