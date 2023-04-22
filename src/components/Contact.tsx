import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  example: string,
  exampleRequired: string,
};

export default function Contact() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

  console.log(watch("example")) // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input defaultValue="test" {...register("example")} />
      
      {/* include validation with required or other standard HTML validation rules */}
      <input {...register("exampleRequired", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}
      
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