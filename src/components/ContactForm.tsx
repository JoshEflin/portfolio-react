import React, {useState} from "react";


export default function ContactForm() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName]= useState('');

    const handleInputChange= (e:any) =>{
        
        const {name, value} = e.target
        return name ==='firstName'? setFirstName(value): setLastName(value)
    }
    const handleFormSubmit = (e:any) => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        e.preventDefault();
    
        // Alert the user their first and last name, clear the inputs
        alert(`Hello ${firstName} ${lastName}`);
        setFirstName('');
        setLastName('');
      };
    
      return (
        <div>
          <p>
            Hello {firstName} {lastName}
          </p>
          <form className="form">
            <input
              value={firstName}
              name="firstName"
              onChange={handleInputChange}
              type="text"
              placeholder="First Name"
            />
            <input
              value={lastName}
              name="lastName"
              onChange={handleInputChange}
              type="text"
              placeholder="Last Name"
            />
            <button type="button" onClick={handleFormSubmit}>
              Submit
            </button>
          </form>
        </div>
      );
}