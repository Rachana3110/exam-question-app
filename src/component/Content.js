import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { data } from "../data";
import { FormContext } from "../FormContext";
import Element from "./Element";
import styled from "styled-components";

const Footer = styled.section`
  background-color: #ffffff;
`;
const FooterButton = styled.button`
  background-color: red;
  float:right;
  margin: 10px
`;
const ElementComp = styled.section`
  background-color: #ffffff;
  padding: 1rem;
  margin-bottom: 1rem;
  width: 700px
`;

const QuestionHeader = styled.h1`
  font-size: 1.3em;
  text-align: center;
  color: #000;
`;
const Form = styled.form`
  overflow-y: scroll;
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Content = () => {
  const [dataItems, setdataItems] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setdataItems(data);
  }, []);

  const { questions } = dataItems ?? {};

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("readonlyform", { state: dataItems });
  };

  const handleChange = (id, event) => {
    event.preventDefault();
    const newDataItems = { ...dataItems };
    newDataItems.questions.forEach((question) => {
      const { questionid, questiontype } = question;

      if (id === questionid) {
        switch (questiontype) {
          case "Checkbox":
            question["selectedoption"] = event.target.value;
            break;

          default:
            question["selectedoption"] = event.target.value;
            break;
        }
        setdataItems(newDataItems);
      }
    });
  };
  return (
    <FormContext.Provider value={{ handleChange }}>
      <div className="App container">
        <QuestionHeader>Multiple Choice Questions</QuestionHeader>
        <Form>
            {questions
              ? questions.map((q, i) => (
                  <ElementComp key={i}>
                      {q.question}
                      <Element key={i} questions={q} />
                  </ElementComp>
                ))
              : null}
        </Form>
      </div>
      <Footer>
        <FooterButton type="submit" onClick={(e) => handleSubmit(e)}>
          NEXT
        </FooterButton>
      </Footer>
    </FormContext.Provider>
  );
};

export default Content;
