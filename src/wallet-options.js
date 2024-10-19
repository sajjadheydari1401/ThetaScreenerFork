import * as React from "react";
import { Connector, useConnect } from "wagmi";

export function WalletOptions() {
  const { connectors, connect } = useConnect();

  const connector = connectors[0];

  return (
    <button
      className="connect-button"
      key={connector.uid}
      onClick={() => connect({ connector })}
    >
      Connect {connector.name}
    </button>
  );
}
