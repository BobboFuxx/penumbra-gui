import React, { useEffect, useState } from "react";
import { getValidators } from "../../utils/penumbraAPI";

const ValidatorList = () => {
  const [validators, setValidators] = useState<any[]>([]);

  useEffect(() => {
    const fetchValidators = async () => {
      const validatorData = await getValidators();
      setValidators(validatorData);
    };

    fetchValidators();
  }, []);

  return (
    <div className="validator-list">
      <h2>Validators</h2>
      <ul>
        {validators.map((validator, index) => (
          <li key={index}>
            {validator.name} ({validator.address})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ValidatorList;
