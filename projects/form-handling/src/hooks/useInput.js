import { useState } from "react";

export default function useInput(defultValue, checkInvalidFn) {
    const [inputVal, setInputVal] = useState(defultValue)
    const [didEdit, setDidEdit] = useState(false)

     const isInputInvalid  = didEdit && checkInvalidFn(inputVal)

    function handleOnChange(event) {
        setInputVal(event.target.value)
        setDidEdit(false)
    }

    function handleInputBlur() {
        setDidEdit(true)
    }

  

    return {
        didEdit,
        inputVal,
        isInputInvalid,
        handleOnChange,
        handleInputBlur
    }


}