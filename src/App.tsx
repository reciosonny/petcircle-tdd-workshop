import React, { useState } from "react";
import "./App.css";

function App({ initialValue }: any) {
    const [val, setVal] = useState(initialValue ?? 0);

    return (
        <div className="App">
            <h1>My counter</h1>
            <div>
              <span data-testid="count" style={{ fontSize: 32 }}>{val}</span>
            </div>
            <button onClick={() => setVal((prevVal: number) => prevVal + 1)}>
                +
            </button>
            <button
                onClick={() =>
                    val > 0 && setVal((prevVal: number) => prevVal - 1)
                }
            >
                -
            </button>
            <button onClick={() => setVal(0)}>Reset</button>
        </div>
    );
}

export default App;
