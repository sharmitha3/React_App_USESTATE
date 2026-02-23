import { useState } from "react";

function App()
{
  const[count , setCount] = useState(0);

  const[On,setOn] = useState(false);

  const[inpval , setInpval] = useState("");

  const[bgcolor, setBgclr] = useState("#ffffff");

  const[like , setLike] = useState(0);

  const colors = ["red", "blue", "green", "purple", "orange", "pink", "yellow", "cyan", "magenta"];

  const changecolor = () =>
  {
    const index = Math.floor(Math.random() * colors.length);
    setBgclr(colors[index]);
  };

  return(
    <div style={{ backgroundColor: bgcolor, minHeight: "100vh", padding: "20px" }}>
      <h1>REACT APP</h1>

      <div>
        <h2>Count : {count}</h2>
        <button onClick={() => setCount(count+1)}>Increase</button>
        <button onClick={() => setCount(count-1)}>decrease</button>
      </div>

      <hr/>

      <div>
        <h2>Toggle :{On ? "ON" : "OFF"}</h2>
        <button onClick={() => setOn(true)}>Turn ON</button>
        <button onClick={() => setOn(false)}>Turn OFF</button>
      </div>

        <div>
        <h2>Form Input</h2>
        <input
          type="text"
          value={inpval}
          onChange={(e) =>  setInpval(e.target.value)}
          placeholder="Type something..."
        />
        <p>You typed: {inpval}</p>
        </div>
        <hr/>

        <div>
        <h2>Background Color Changer</h2>
        <button onClick={changecolor}>Change Background Color</button>

        </div>

        <hr/>

        <div>
        <h2>Likes: {like}</h2>
        <button onClick={() => setLike(like + 1)}>Like</button>
      </div>

    </div>

  );

}
export default App;
