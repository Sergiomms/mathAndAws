import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import RealTimeDimensions from "./windowSize";

function App() {
  const [width] = RealTimeDimensions();
  const mobile = width < 800 ? true : false;
  const [base, setBase] = useState(0);
  const [exponent, setExponent] = useState(0);

  async function handleSubmit() {
    let request =  await axios.post("https://zpzo4x8smf.execute-api.us-east-1.amazonaws.com/dev", {
      base: base,
      exponent: exponent
    })
    alert(request.data.body)
  };

  return (
    <>
      <div className={mobile ? "mainContainerMobile" : "mainContainer" }>
        <h1 className={mobile && "text"}>Welcome to the project: Math + AWS!</h1>
        <h2 className={mobile && "text"}>Created by Sérgio Mariano 🙃</h2>

        <div className={mobile ? "baseContainerMobile" : "baseContainer"}>
          <h4>Base Number:</h4>{" "}
          <input
            className="input"
            type="number"
            name="base"
            onChange={(e) => setBase(parseInt(e.target.value))}
          />{" "}
          <h4>...To the power of:</h4>
          <input
            className="input"
            type="number"
            name="exponent"
            onChange={(e) => setExponent(parseInt(e.target.value))}
          />{" "}
          <button className={mobile ? "btnMobile" : "btn"} onClick={() => handleSubmit()}>
            Calculate
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
