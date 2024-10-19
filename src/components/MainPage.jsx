// MainPage.js
import React, { useState } from "react";
import MainComponent from "./MainComponent";
import { Header } from "./Header";
import { TokenList } from "./TokenList";
import Footer from "./Footer";
import { connectToMetaMask, disconnect } from "../utils/wallet";

const MainPage = () => {
  const [address, setAddress] = useState(null);
  const [provider, setProvider] = useState(null);
  const [error, setError] = useState(null);

  const handleConnect = async () => {
    const { error, provider, account } = await connectToMetaMask();
    setProvider(provider);
    setAddress(account);
    setError(error);
  };

  const handleDisconnect = async () => {
    const { error, provider, account } = await disconnect();
    setProvider(provider);
    setAddress(account);
    setError(error);
  };

  if (!address) {
    return (
      <button className="connect-button" onClick={handleConnect}>
        Connect
      </button>
    );
  }

  return (
    <div>
      <Header address={address} error={error} onDisconnect={handleDisconnect} />
      <TokenList />
      <MainComponent />
      <Footer />
    </div>
  );
};

export default MainPage;
