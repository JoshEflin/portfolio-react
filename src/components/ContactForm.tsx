import {useState,ChangeEvent,FormEvent} from "react";


export default function ContactForm() {
    const [firstName, setFirstName] = useState('');
    const [email, setEmail]= useState('');
    const [text, setText]= useState('')
    const [requiredField, setRequiredField] = useState('');

    const handleInputChange = (e:ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'firstName') {
      setFirstName(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'message') {
      setText(value);
    }
  };
  const handleInputBlur = (e:ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(e.target)
    if (value==='') {
      console.log('here')
      alert(`The ${name} field is required`)
        setRequiredField(name);
    } 
};
  // return name ==='firstName'? setFirstName(value): setEmail(value)
    
  const handleFormSubmit = (e:FormEvent<HTMLFormElement>) => {
      // Preventing the default behavior of the form submit (which is to refresh the page)
      e.preventDefault();
      console.log(e)
      let missing:string[]= []
      if(!firstName){
            missing.push("first-name");
      } if (!email){
        missing.push("email");
      } if(!text){
        missing.push("text");
      } 
      if (missing[0]){
      alert(`You are missing the following fields:\n${missing[0]}\n${missing[1]||''}\n${missing[2]||''}`)
      }
      if (email){
        const emailregex=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const isValid =emailregex.test(email)
        if(!isValid){
          alert('The email you entered is not valid')
        }
      }
      // Alert the user their first and last name, clear the inputs
      alert(`This is a test feature only, If you'd like to send a real email please click the mail icon in the footer`);
      setFirstName('');
      setEmail('');
      setText('')
    };
    
    return (
      <div className="contact-container">
        
        <form className="contact-form" onSubmit={handleFormSubmit}>
          <input className="inputs name-input"
            value={firstName}
            name="firstName"
            onChange={handleInputChange}
            onBlur={handleInputBlur}

            type="text"
            placeholder="First Name"
          />
          <input className="inputs email-input"
            value={email}
            name="email"
            onChange={handleInputChange}
            onBlur={handleInputBlur}

            type="text"
            placeholder="Email Address"
          />
          <input className="inputs text-input"
          value={text}
          name="message"
          onChange= {handleInputChange}
          onBlur={handleInputBlur}

          type="text"
          placeholder="Enter your message here"
          />
          <button type="submit"> 
            Submit
          </button>
        </form>
      </div>
    );
}