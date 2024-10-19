import "./App.css";
import RoutesComponent from "./routes";
import { Helmet } from "react-helmet";
import favicon from "./assets/img/tokens/wtheta.png";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { config } from "./config";
import { useAccount } from "wagmi";
import { WalletOptions } from "./wallet-options";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <Helmet>
            <title>Theta Screener</title>
            <link rel="icon" type="image/png" href={favicon} sizes="16x16" />
          </Helmet>
          <RoutesComponent />
        </QueryClientProvider>
      </WagmiProvider>
    </div>
  );
}

export default App;
