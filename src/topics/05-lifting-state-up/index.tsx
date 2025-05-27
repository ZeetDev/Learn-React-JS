import { useState } from "react";

// Child Component that Pass State to Parent Component
function InputComponent({ inputValue, setInputValue }: { inputValue: string; setInputValue: (value: string) => void }) {
    // const [inputValue, setInputValue] = useState<string>(""); // ?? to state lift up define child component state into parent and pass that state via props to child
    return (
        <>
            <input
                type="text"
                name="username"
                placeholder="Enter your name"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
        </>
    );
}

// Child Component
function DisplayName({ name }: { name?: string }) {
    return <h2>Display Name : {name}</h2>;
}


// Parent Component
function LiftingStateUp() {
    const [inputValue, setInputValue] = useState<string>("");
    return (
        <div>
            <h1 style={{ marginBottom: "10px" }}>Lifting State Up</h1>
            <InputComponent inputValue={inputValue} setInputValue={setInputValue} />
            <DisplayName name={inputValue} />
        </div>
    );
}

export default LiftingStateUp;
