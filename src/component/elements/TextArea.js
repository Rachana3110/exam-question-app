import React, { useContext } from 'react'
import { FormContext } from "../../FormContext";

const Textarea = ({ questionid, question, questionoption }) => {
    const { handleChange } = useContext(FormContext);
  return (
    <div>
      {questionoption &&
        questionoption.map((q,i) => {
          return (
            <div key={i}>
              <textarea
                id="questionid"
                name={question}
                onChange={(event) => handleChange(questionid, event)}
              />
            </div>
          );
        })}
    </div>
  )
}

export default Textarea
