import { useState, useEffect } from "react";


function App() {
  const [value, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  function onClick() {
    setValue((prev) => prev + 1);
  }
  function onChagne(event) {
    setKeyword(event.target.value);
  }
  console.log("This render is always");

  useEffect(() => {
    console.log("This render is one time")
  }, [])

  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log("keyword is :", keyword);
    }
  }, [keyword]);

  useEffect(() => {
    console.log("Click render");
  }, [value]);
  return (
    <div>
      <h1> {value} This is useEffect Test!</h1>
      <input value={keyword} placeholder="Search" onChange={onChagne}></input>
      <div>
        <button onClick={onClick}>Click</button>
      </div>
    </div>
  );
}

export default App;
