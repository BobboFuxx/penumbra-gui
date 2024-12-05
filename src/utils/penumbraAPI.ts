export const getBalance = async (): Promise<string> => {
  // Mock API call to fetch balance
  return "1000";
};

export const sendTransaction = async (recipient: string, amount: string) => {
  // Mock API call to send transaction
  console.log(`Sending ${amount} PEN to ${recipient}`);
};
