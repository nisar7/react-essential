// import { useState } from "react";
import useInput from "../hooks/useInput";
import Input from "./Input";

export default function Login() {



  const {
    isInputInvalid: isEmailInValid,
    didEdit: emailEdit,
    inputVal: emailVal,
    handleOnChange: handleOnEmailChange,
    handleInputBlur: handleOnEmailInputBlur } = useInput("", checkEmailInValid)


  const {
    isInputInvalid: isPasswordInValid,
    didEdit: passwordEdit,
    inputVal: passwordVal,
    handleOnChange: handleOnPasswordChange,
    handleInputBlur: handleOnPasswordInputBlur } = useInput("", checkPasswordInValid)


  function checkEmailInValid(value) {
    return !value.includes("@")
  }

  function checkPasswordInValid(value) {
    return value.length < 4
  }


  // const [enteredVal, setEnteredVal] = useState({
  //   email: "",
  //   password: ""
  // })


  // const [didEdit, setDidEdit] = useState({ email: false, password: false })

  // const isEmailInValid = emailEdit && !emailVal.includes("@")

  // const isPasswordInValid = passwordEdit && passwordVal.length < 4


  function handleFormSubmit(event) {
    event.preventDefault()
    console.log(enteredVal);
  }



  return (
    <form onSubmit={handleFormSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          id="email"
          label="email"
          onBlur={handleOnEmailInputBlur}
          onChange={handleOnEmailChange}
          error={isEmailInValid ? "Please Enter Valid Email" : null}
        >
        </Input>


        <div className="control no-margin">
          <Input
            id="password"
            label="password"
            onBlur={handleOnPasswordInputBlur}
            onChange={handleOnPasswordChange}
            error={isPasswordInValid ? "Please Enter Valid password" : null}
          >
          </Input>
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
