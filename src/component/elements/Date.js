import React, { useContext } from 'react'
import { FormContext } from "../../FormContext";

const Date = ({ questionid, question, questionoption }) => {
    const { handleChange } = useContext(FormContext);
  return (
    <div>
      {questionoption &&
        questionoption.map((q,i) => {
          return (
            <div key={i}>
              <input
                type="date"
                id="questionid"
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

export default Date
