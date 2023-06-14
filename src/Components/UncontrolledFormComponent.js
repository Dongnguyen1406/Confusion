import React, {useRef} from "react";

function UncontrolledForm() {
    const formRef = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(formRef.current);
        console.log('Name: ${formData.get('name')}\nEmail: ${formData.get('email')}');
    };

    return (
        <form ref={formRef} conSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" name="name" />
            </label>
            <br/>
            <label>
                Email:
                <input type="email" name="email" />
            </label>
            <br/>
            <button type="submit">Submit</button>
        </form>
    );
}

export default UncontrolledForm;