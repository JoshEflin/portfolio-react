import {
  useState,
  ChangeEvent,
  FormEvent,
  FormEventHandler,
  ChangeEventHandler,
  SetStateAction,
} from "react";
import ContactInput from "./ContactInput";
import sillyPhoto from "../assets/JoshEflin_Headshot_0399.jpg";

interface ContactInputProps {
  name: string;
  className: string;
  value: string;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleInputBlur: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  active: boolean;
}
export default function ContactForm() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [isActive, setIsActive] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(e.target);

    if (name === "first Name") {
      setFirstName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "message") {
      setText(value);
    }
  };
  const handleInputBlur = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, id } = e.target;
    console.log(e.target.value);
    if (value === "") {
      console.log("here");
      alert(`The ${name} field is required`);

      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };
  // return name ==='firstName'? setFirstName(value): setEmail(value)
  const contactProps: ContactInputProps[] = [
    {
      name: "first Name",
      className: "first-name",
      value: firstName,
      handleInputBlur: handleInputBlur,
      handleInputChange: handleInputChange,
      placeholder: "First Name",
      active: isActive,
    },
    {
      name: "email",
      className: "email",
      value: email,
      handleInputBlur: handleInputBlur,
      handleInputChange: handleInputChange,
      placeholder: "Email",
      active: isActive,
    },
    {
      name: "message",
      className: "text-input",
      value: text,
      handleInputBlur: handleInputBlur,
      handleInputChange: handleInputChange,
      placeholder: "message",
      active: isActive,
    },
  ];

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();
    console.log(e);
    let missing: string[] = [];
    if (!firstName) {
      missing.push("first-name");
    }
    if (!email) {
      missing.push("email");
    }
    if (!text) {
      missing.push("text");
    }
    if (missing[0]) {
      alert(
        `You are missing the following fields:\n${missing[0]}\n${
          missing[1] || ""
        }\n${missing[2] || ""}`
      );
    }
    if (email) {
      const emailregex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      const isValid = emailregex.test(email);
      if (!isValid) {
        alert("The email you entered is not valid");
      }
    }
    // Alert the user their first and last name, clear the inputs
    alert(
      `This is a test feature only, If you'd like to send a real email please click the mail icon in the footer`
    );
    setFirstName("");
    setEmail("");
    setText("");
  };

  return (
    <div className=" contact-view">
      <img id="silly-photo" src={sillyPhoto} alt="a silly photo"></img>
      <div className="contact-container">
        <form className="contact-form" onSubmit={handleFormSubmit}>
          <h2>Fill out the form!</h2>
          {contactProps.map((contact: ContactInputProps, i) => {
            return <ContactInput key={i} {...contact} />;
          })}
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
