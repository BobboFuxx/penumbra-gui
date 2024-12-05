import axios from "axios";

export const depositForBurn = async (
  amount: number,
  destinationAddress: string
) => {
  // Mock deposit for burn logic
  console.log(`Depositing ${amount} PEN to ${destinationAddress}`);
};

export const receiveMessage = async (
  messageBytes: string,
  attestation: string
) => {
  // Mock receive message logic
  console.log(`Receiving message: ${messageBytes}, with attestation: ${attestation}`);
};
