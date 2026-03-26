
import { useActionState } from "react";
import { isEmail, isNotEmpty, hasMinLength, isEqualToOtherValue } from "../util/validation";

export default function Signup() {



  function signUpAction(prevState, fd) {
    const email = fd.get("email");
    const password = fd.get("password");
    const confirmPassword = fd.get("confirm-password");
    const firstName = fd.get("first-name");
    const lastName = fd.get("last-name");
    const role = fd.get("role");
    const acquisition = fd.getAll("acquisition");
    const terms = fd.get("terms")

    debugger

    let errors = []

    if (!isNotEmpty(email) || !isEmail(email)) {
      errors.push("Please Enter Valid Email")
    }

    if (!isNotEmpty(password) || !hasMinLength(password, 4)) {
      errors.push("Please Enter Valid Password of at least length 4")
    }

    if (!isNotEmpty(confirmPassword) || !isEqualToOtherValue(password, confirmPassword)) {
      errors.push("Password Mismatch")
    }

    if (!isNotEmpty(firstName)) {
      errors.push("Please Enter First Name")
    }

    if (!isNotEmpty(lastName)) {
      errors.push("Please Enter Last Name")
    }

    if (!isNotEmpty(role)) {
      errors.push("Please Select a role")
    }

    if (acquisition.length < 1) {
      errors.push("Please Select valid acquisition")
    }

    if (!terms) {
      errors.push("Please Select Terms")
    }

    if (errors.length > 0) {
      console.log("acquisition", acquisition);

      return { errors, email, password, confirmPassword, firstName, lastName, terms, role, acquisition, terms }
    } else {
      return { errors: null }
    }


  }

  const [formState, formAction] = useActionState(signUpAction, { error: null })


  return (
    <form action={formAction}>
      <h2>Welcome on board!</h2>
      <p>We just need a little bit of data from you to get you started 🚀</p>

      <div className="control">
        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="email" defaultValue={formState?.email} />
      </div>

      <div className="control-row">
        <div className="control">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" defaultValue={formState?.password} />
        </div>

        <div className="control">
          <label htmlFor="confirm-password" >Confirm Password</label>
          <input
            defaultValue={formState?.confirmPassword}
            id="confirm-password"
            type="password"
            name="confirm-password"
          />
        </div>
      </div>

      <hr />

      <div className="control-row">
        <div className="control">
          <label htmlFor="first-name">First Name</label>
          <input type="text" id="first-name" name="first-name" defaultValue={formState?.firstName} />
        </div>

        <div className="control">
          <label htmlFor="last-name">Last Name</label>
          <input type="text" id="last-name" name="last-name" defaultValue={formState?.lastName} />
        </div>
      </div>

      <div className="control">
        <label htmlFor="phone">What best describes your role?</label>
        <select id="role" name="role" defaultValue={formState?.role}>
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
          <option value="employee">Employee</option>
          <option value="founder">Founder</option>
          <option value="other">Other</option>
        </select>
      </div>

      <fieldset>
        <legend>How did you find us?</legend>
        <div className="control">
          <input
            type="checkbox"
            id="google"
            name="acquisition"
            value="google"
            defaultChecked={formState?.acquisition?.includes("google")}
          />
          <label htmlFor="google">Google</label>
        </div>

        <div className="control">
          <input
            type="checkbox"
            id="friend"
            name="acquisition"
            value="friend"
            defaultChecked={formState?.acquisition?.includes("friend")}
          />
          <label htmlFor="friend">Referred by friend</label>
        </div>

        <div className="control">
          <input type="checkbox"
            id="other"
            name="acquisition"
            value="other"
            defaultChecked={formState?.acquisition?.includes("other")} />
          <label htmlFor="other">Other</label>
        </div>
      </fieldset>

      <div className="control">
        <label htmlFor="terms-and-conditions">
          <input type="checkbox" id="terms-and-conditions" name="terms" defaultChecked={formState?.terms} />I
          agree to the terms and conditions
        </label>
      </div>

      <div className="error">
        <ol>
          {formState?.errors?.map(error => <li key={error}>{error}</li>)}
        </ol>
      </div>

      <p className="form-actions">
        <button type="reset" className="button button-flat">
          Reset
        </button>
        <button className="button">Sign up</button>
      </p>
    </form>
  );
}
