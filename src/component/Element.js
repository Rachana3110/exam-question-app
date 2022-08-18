import React from "react";
import CheckBox from "./elements/CheckBox";
import Date from "./elements/Date";
import Radio from "./elements/Radio";
import Textarea from "./elements/TextArea";

const Element = ({
  questions: { questionid, question, questiontype, questionoption },
}) => {
  switch (questiontype) {
    case "Checkbox":
      return (
        <CheckBox
          questionid={questionid}
          question={question}
          questionoption={questionoption}
        />
      );
    case "Radio":
      return (
        <Radio
          questionid={questionid}
          question={question}
          questionoption={questionoption}
        />
      );
    case "Date":
      return (
        <Date
          questionid={questionid}
          question={question}
          questionoption={questionoption}
        />
      );
    case "Textarea":
      return (
        <Textarea
          questionid={questionid}
          question={question}
          questionoption={questionoption}
        />
      );

    default:
      return null;
  }
};

export default Element;
