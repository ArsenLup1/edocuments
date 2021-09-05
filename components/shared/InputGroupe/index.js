import React from "react";
import { Label, Input, } from "reactstrap";
import { FormWarp } from "./inputG.stc";

const InputGroup = (props) => {
  // const { children, textLabel, typeInput, nameInput, idInput, valueInput } = props;
  return (
    <FormWarp>
      <div className="input-field text-lg-left">
        <input type="text" id={props.id} required />
        <label for={props.id}>{props.label}</label>
      </div>
    </FormWarp>
  )
};

export default InputGroup;