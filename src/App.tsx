import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Shared/Header";
import Footer from "./components/Shared/Footer";
import BalanceDisplay from "./components/Account/BalanceDisplay";
import QRCodeGenerator from "./components/Account/QRCodeGenerator";
import AddressGenerator from "./components/Account/AddressGenerator";
import SendPenumbra from "./components/Account/SendPenumbra";
import LiquidityPools from "./components/Liquidity/LiquidityPools";
import CreatePool from "./components/Liquidity/CreatePool";
import Delegation from "./components/Delegation/Delegation";

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<BalanceDisplay />} />
          <Route path="/send" element={<SendPenumbra />} />
          <Route path="/qrcode" element={<QRCodeGenerator />} />
          <Route path="/address" element={<AddressGenerator />} />
          <Route path="/liquidity" element={<LiquidityPools />} />
          <Route path="/liquidity/create" element={<CreatePool />} />
          <Route path="/delegation" element={<Delegation />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
