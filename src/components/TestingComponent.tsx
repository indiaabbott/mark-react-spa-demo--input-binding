import React, {useState} from "react"

function TestingComponent () {
    const [name, setName] = useState("");
    return (<div>
    <input onChange={(event) => setName(event.target.value)} value={name} />
    <button onClick={() => console.log(name)}>Log</button>
    <button onClick={() => setName("Olivia")}>Transform into Olivia</button>
    </div>
    )}

export default TestingComponent