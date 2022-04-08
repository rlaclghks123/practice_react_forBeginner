import { useEffect, useState } from "react";



function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [money, setMoney] = useState(1);
  const [price, setPrice] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const getCoin = async () => {
    const json = await (await fetch(`https://api.coinpaprika.com/v1/tickers?limit=10 `)).json();
    setCoins(json);
    setLoading(false)
  }
  useEffect(() => {
    getCoin();
  }, []);

  function onChange(event) {
    setPrice(event.target.value);
  }

  function onSelect(event) {
    setMoney(event.target.value);
  }
  function reset() {
    setPrice(0);

  }
  function onClick() {
    setFlipped((prev) => !prev)
    reset();
  }

  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (<strong>Loading...</strong>) : (
        <select onChange={onSelect}>
          <option >Select Coin</option>

          {
            coins.map((coin) => (
              <option key={coin.id} value={coin.quotes.USD.price}>
                {coin.name}   ({coin.symbol}) :  ${coin.quotes.USD.price} USD
              </option>
            ))
          }
        </select>
      )
      }

      <div>
        <label htmlFor="USD">$USD</label>
        <input onChange={onChange} value={flipped ? money * price : price} id="USD" placeholder="Write USD" disabled={flipped}></input>
      </div>
      <div>
        <label htmlFor="BTC">$BTC</label>
        <input onChange={onChange} value={flipped ? price : money / price} id="BTC" placeholder="Write BTC" disabled={!flipped}></input>
      </div>
      <button onClick={onClick}>Transfer</button>
      <button onClick={reset}>Reset</button>
    </div >

  );
}

export default App;
