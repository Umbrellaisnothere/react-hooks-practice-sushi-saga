import React, { useEffect, useState } from "react";
import Table from "./Table";
import SushiContainer from "./SushiContainer";

const API = "http://localhost:3000/sushis";

function App() {

  const [sushis, setSushis] = useState([]);
  const [wallet, setWallet] = useState(100);

  useEffect(() => {
    fetch(API)
      .then((r) => r.json())
      .then((sushis) => {
        const updatedSushis = sushis.map((sushi) => {
          return { ...sushi, eaten: false };
        });
        setSushis(updatedSushis);
      });
  }, []);

  function handleEatSushi(eatenSushi) {
    if (wallet >= eatenSushi.price) {
      const updatedSushis = sushis.map((sushi) => {
        if (sushi.id === eatenSushi.id) return { ...sushi, eaten: true };
        return sushi;
      });

      setSushis(updatedSushis);
      setWallet((wallet) => wallet - eatenSushi.price);
    } else {
      alert("Need more 💸");
    }
  }

  function handleAddMoney(moreMoney) {
    setWallet((wallet) => wallet + moreMoney);
  }

  const eatenSushis = sushis.filter((sushi) => sushi.eaten);


  return (
    <div className="app">
      <SushiContainer 
      sushis={sushis} 
      onEatSushi={handleEatSushi} 
      />

      <Table 
      wallet={wallet} 
      onAddMoney={handleAddMoney} 
      plates={eatenSushis} 
      />
      
    </div>
  );
}

export default App;
