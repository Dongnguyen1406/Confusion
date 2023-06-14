import React, {useState} from "react";

function ControlledForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Name: ${name}\nEmail: ${email}');
    };

    return (
        <form on onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
            </label>
            <br/>
            <label>
                Email:
                <input type="text" value={email} onChange={(event) => setName(event.target.value)} />
            </label>
            <br/>
            <button type="submit">Submit</button>
        </form>
    );
}

export default ControlledForm;