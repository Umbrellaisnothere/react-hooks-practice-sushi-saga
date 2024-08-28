import React, { useState } from "react";
import Sushi from "./Sushi";
import MoreButton from "./MoreButton";

function SushiContainer({ sushis, onEatSushi }) {

  const [sushiIndex, setSushiIndex] = useState(0);

  const sushiComponents = sushis
    .slice(sushiIndex, sushiIndex + 4)
    .map((sushi) => (
      <Sushi key={sushi.id} sushi={sushi} onEatSushi={onEatSushi} />
    ));

  function handleClickMore() {
  
    setSushiIndex((sushiIndex) => (sushiIndex + 4) % sushis.length);
  }

  return (
    <div className="belt">
      {sushiComponents}
      
      <MoreButton onClickMore={handleClickMore} />
    </div>
  );
}

export default SushiContainer;