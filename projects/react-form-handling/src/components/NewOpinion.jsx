import { useActionState, use } from "react";
import { OpinionsContext } from "../store/opinions-context";
import Submit from "./Submit";


export function NewOpinion() {

  const [formState, formAction, pending] = useActionState(opinionAction, { errors: null })

  const { addOpinion } = use(OpinionsContext)

  async function opinionAction(prevState, fd) {
    const username = fd.get("userName")
    const title = fd.get("title")
    const opinion = fd.get("body")


    let errors = []
    if (!username) {
      errors.push("Please Enter User Name")
    }
    if (!title) {
      errors.push("Please Enter Title")
    }
    if (!opinion) {
      errors.push("Please Enter Opinion")
    }

    if (errors.length > 0) {
      return { errors, enterValues: { username, title, opinion } }
    } else {

      // here i need to submit data to back end

      try {
        const opinionPayload = {
          userName: username,
          title,
          body: opinion
        }

        const response = await addOpinion(opinionPayload)
        return { errors: null }

      } catch (error) {
        error.push("Error:  Unable to save data")
      }

    }

  }


  return (
    <div id="new-opinion">
      <h2>Share your opinion!</h2>
      <form action={formAction}>
        <div className="control-row">
          <p className="control">
            <label htmlFor="userName">Your Name</label>
            <input type="text" id="userName" name="userName" defaultValue={formState?.enterValues?.username} />
          </p>

          <p className="control">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" defaultValue={formState?.enterValues?.title} />
          </p>
        </div>
        <p className="control">
          <label htmlFor="body">Your Opinion</label>
          <textarea id="body" name="body" rows={5} defaultValue={formState?.enterValues?.opinion}></textarea>
        </p>

        {formState.errors && <div id="errors">
          <ul className="errors">
            {formState.errors.map((error) => <li key={error}>{error}</li>)}
          </ul>
        </div>}

        <Submit></Submit>
      </form>
    </div>
  );
}
