import React from "react";
import KoreanFood from "./KoreanFood";

function Menu(props) {
  return (
    <div>
      <KoreanFood name="김치" price={500} />
      <KoreanFood name="불고기" price={10000} />
    </div>
  );
}
export default Menu;
