import {React, useRef } from "react";
function UncontrollerForm () {
    const formRef = useRef('');

    const handleSubmit = (event) => {
      event.preventDefault();
      const formData = new FormData(formRef.current);
      alert(`Name: ${formData.get('name')}\nEmail: ${formData.get('email')}`);
    };
    
    return (
    
      <form ref={formRef} onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    );
}
export default UncontrollerForm;