import React, { useContext } from "react";
import { FormContext } from "../../FormContext";

const CheckBox = ({ questionid, question, questionoption }) => {
  const { handleChange } = useContext(FormContext);
  return (
    <div>
      {questionoption &&
        questionoption.map((q, i) => {
          return (
            <div key={i}>
              <input
                type="checkbox"
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
  );
};

export default CheckBox;
