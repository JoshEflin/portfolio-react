import {
  useState,
  ChangeEvent,
  FormEvent,
  FormEventHandler,
  ChangeEventHandler,
  SetStateAction,
} from "react";

interface ContactInputProps {
  name: string;
  className: string;
  value: string;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleInputBlur: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}
export default function ContactInput(props: ContactInputProps) {
  return (
    <>
      <label className="labels">{props.name.toUpperCase()}</label>
      <input
        className={"inputs " + props.className}
        value={props.value}
        name={props.name}
        onChange={props.handleInputChange}
        onBlur={props.handleInputBlur}
        type="text"
        placeholder={props.placeholder}
      />
    </>
  );
}
