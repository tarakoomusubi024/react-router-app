const Greeting = () => {
  const handleClick = () => {
    const name = document.getElementById("nameInput").value;
    alert(`Hello, ${name}!`);
  };

  return (
    <div>
      <input
        type="text"
        id="nameInput"
        placeholder="名前を入力"
      />

      <button onClick={handleClick}>
        あいさつ
      </button>
    </div>
  );
};

export default Greeting;