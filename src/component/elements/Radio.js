import React, { useContext } from 'react'
import { FormContext } from "../../FormContext";

const Radio = ({ questionid, question, questionoption }) => {
    const { handleChange } = useContext(FormContext);
  return (
    <div>
      {questionoption &&
        questionoption.map((q,i) => {
          return (
            <div key={i}>
              <input
                type="radio"
                id="questionid"
                value={q.optionvalue}
                name={question}
                onChange={(event) => handleChange(questionid, event)}
              />
              <label>{q.optionvalue}</label>
            </div>
          );
        })}
    </div>
  )
}

export default Radio
