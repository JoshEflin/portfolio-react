import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string,
  email: string,
  text: string,
};

export default function Contact() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>({ 
    defaultValues:
    {
      name:"Name",
     email: "email@address.com",
     text: "Enter Message"
    }
    });
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);
  console.log(register)

  console.log(watch("name")) // watch input value by passing the name of it
console.log(errors, "this is the error")
  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input  {...register("name",{required:true}) } />
      
      {/* include validation with required or other standard HTML validation rules */}
      <input {...register("email", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.email && <span>This field is required</span>}
      <input {...register('text', {required:true})} />
      <input type="submit" />
    </form>
  );
}
// import React from "react";

// export default function ContactForm() {
//     return(
//         <form>
//             <label htmlFor="first-name">First name:</label>
//             <input type="text" id= "first-name" name="first-name"></input>
//             <label htmlFor ="email-address">Email:</label>
//             <input type="text"  id="email-address" name="email address"/>
//             <label htmlFor= "text-body"> Inquiry:</label>
//         </form>
//     )
// }