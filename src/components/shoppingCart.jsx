import { useState } from "react";

const ShoppingCart = () => {
  const [count, setCount] = useState(1);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const addToCart = () => {
    alert(`${count}個の商品をカートに入れました！`);
  };

  return (
    <div className="shopping-cart">
      <h1>ショッピングカート</h1>

      <div className="count-area">
        <p>選択した個数:</p>
        <div className="count">{count}</div>
      </div>

      <div className="button-area">
        <button className="increase-button" onClick={increaseCount}>
          個数を増やす
        </button>

        <button className="decrease-button" onClick={decreaseCount}>
          個数を減らす
        </button>
      </div>

      <button className="cart-button" onClick={addToCart}>
        🛒 カートに入れる
      </button>
    </div>
  );
};

export default ShoppingCart;