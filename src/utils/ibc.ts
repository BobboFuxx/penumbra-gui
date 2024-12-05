import axios from "axios";

const IBC_API = "https://api.penumbra.ibc/v1";

export const getIBCChannels = async () => {
  try {
    const response = await axios.get(`${IBC_API}/channels`);
    return response.data;
  } catch (error) {
    console.error("Error fetching IBC channels:", error);
    return [];
  }
};

export const transferIBCAsset = async (channel: string, recipient: string, amount: string) => {
  try {
    const payload = { channel, recipient, amount };
    const response = await axios.post(`${IBC_API}/transfer`, payload);
    return response.data;
  } catch (error) {
    console.error("Error transferring IBC asset:", error);
    throw new Error("IBC Transfer failed");
  }
};
