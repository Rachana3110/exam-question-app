import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Footer = styled.section`
  background-color: #ffffff;
`;
const FooterButton = styled.button`
  background-color: red;
  float: right;
  margin: 10px;
`;
const ElementComp = styled.section`
  background-color: #ffffff;
  padding: 1rem;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  width: 700px;
`;
const Form = styled.form`
  overflow-y: scroll;
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const QuestionHeader = styled.h1`
  font-size: 1.3em;
  text-align: center;
  color: #000;
`;
const ReadOnlyForm = () => {
  const location = useLocation();
  const [readData, setReadData] = useState(null);
  const navigate = useNavigate();

  const data = location.state.questions.map((q, i) => {
    return { question: q.question, selectedoption: q.selectedoption };
  });

  useEffect(() => {
    const filteredData = data.filter((d) => d.selectedoption !== "");
    setReadData(filteredData);
  }, []);
console.log(readData)
  const filterData =
    readData !== null
      ? readData.map((k, i) => k.question + " : " + k.selectedoption)
      : "No Data";
  const handleSubmit = (event) => {
    alert(filterData)
    navigate('/')
    console.log(filterData)
  };

  return (
    <>
      <QuestionHeader>Multiple Choice Questions</QuestionHeader>
      <Form>
        {location.state.questions &&
          location.state.questions.map((q, i) => {
            return (
              <>
                {q.selectedoption && (
                  <ElementComp key={i}>
                    {q.question}
                    <div>{q.selectedoption}</div>
                  </ElementComp>
                )}
              </>
            );
          })}
      </Form>
      <Footer>
        <FooterButton type="submit" onClick={handleSubmit}>
          Submit
        </FooterButton>
      </Footer>
    </>
  );
};

export default ReadOnlyForm;
