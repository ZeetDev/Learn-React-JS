/*
    ?? What is controlled and uncontrolled from

    1. controlled form.
    In react if we use react hooks to handle form data that mean it's a controlled way form.

    2. uncontrolled form
    In react if we use javascript or DOM in short not use react to handle from data that mean it's a uncontrolled way form.
*/

import { useState } from "react";

// Controlled way
const ControlledWay = () => {
    const [inputValue, setInputValue] = useState<string>("");

    const handleSubmitForm = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(inputValue, "controlled way ✅");
    };

    return (
        <form onSubmit={handleSubmitForm}>
            <h2>Controlled Way</h2>
            <input
                type="text"
                name="username"
                placeholder="Enter your username..."
                onChange={(e) => setInputValue(e.target.value)}
                value={inputValue}
            />
        </form>
    );
};

// Uncontrolled way
const UnControlledWay = () => {
    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log((document.querySelector("#username") as HTMLInputElement).value, "uncontrolled way ❌");
    };

    return (
        <form onSubmit={handleFormSubmit}>
            <h2>Uncontrolled Way</h2>
            <input type="text" name="username" placeholder="Enter your username..." id="username" />
        </form>
    );
};

function ControlledUnControlledForm() {
    return (
        <>
            <ControlledWay />
            <UnControlledWay />
        </>
    );
}

export default ControlledUnControlledForm;
