import {useState} from "react";

export default function SimpleForm() {
    const [name, setName] = useState("");

    function nameChanged(e) {
        setName(e.target.value);
    }
    return (
        <form>
            <h1>Hi there {name}</h1>
            <label>
                <input type="text" name="name" value={name} onChange={nameChanged}/>
            </label>
            <button>Just a button</button>
        </form>
    )
}