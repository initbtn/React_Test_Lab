import React from "react";

function KoreanFood(props) {
  return (
    <div>
      <h1>{`메뉴의 이름 : ${props.name}입니다.`}</h1>
      <h2>{`메뉴의 가격 : ${props.price} 원 입니다.`}</h2>
    </div>
  );
}
export default KoreanFood;
