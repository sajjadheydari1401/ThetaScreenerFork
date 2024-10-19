const ethers = require("ethers");

export const connectToMetaMask = async () => {
  if (typeof window.ethereum !== "undefined") {
    try {
      const Web3Provider =
        ethers.providers.Web3Provider || ethers.default.providers.Web3Provider;

      const provider = new Web3Provider(window.ethereum);

      await provider.send("eth_requestAccounts", []);

      const signer = provider.getSigner();
      const userAddress = await signer.getAddress();

      return {
        error: null,
        provider: provider,
        account: userAddress,
      };
    } catch (err) {
      return {
        error: "Failed to connect to MetaMask: " + err.message,
        provider: null,
        account: null,
      };
    }
  } else {
    return {
      error: "MetaMask is not installed. Please install it to use this app.",
      provider: null,
      account: null,
    };
  }
};

export const disconnect = async () => {
  try {
    return {
      error: null,
      provider: null,
      address: null,
    };
  } catch (err) {
    return {
      error: "Failed to disconnect: " + err.message,
      provider: null,
      address: null,
    };
  }
};
