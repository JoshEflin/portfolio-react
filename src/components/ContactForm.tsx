import React, {useState} from "react";


export default function ContactForm() {
    const [firstName, setFirstName] = useState('');
    const [email, setEmail]= useState('');
    const [text, setText]= useState('')

    const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    if (name === 'firstName') {
      setFirstName(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'text') {
      setText(value);
    }
  };

  // return name ==='firstName'? setFirstName(value): setEmail(value)
    
  const handleFormSubmit = (e:any) => {
      // Preventing the default behavior of the form submit (which is to refresh the page)
      e.preventDefault();
      console.log(e)
      let missing:string= ''
      if(!firstName||!email||!text){
        switch(false){
          case Boolean(firstName):
            missing+= "First Name";
        }

        alert(` You are missing a required field!`)
      }
    
      // Alert the user their first and last name, clear the inputs
      alert(`This is a test feature only, If you'd like to send a real email please click the mail icon in the footer`);
      setFirstName('');
      setEmail('');
      setText('')
    };
    
    return (
      <div className="contact-container">
        <p>
          Hello {firstName} {email} {text}
        </p>
        <form className="contact-form">
          <input
            value={firstName}
            name="firstName"
            onChange={handleInputChange}
            type="text"
            placeholder="First Name"
          />
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="text"
            placeholder="email"
          />
          <input
          value={text}
          name="text"
          onChange= {handleInputChange}
          type="text"
          placeholder="your message here"
          />
          <button type="button" onClick={handleFormSubmit}>
            Submit
          </button>
        </form>
      </div>
    );
}