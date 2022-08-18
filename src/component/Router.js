import React from "react";
import {Routes, Route } from "react-router-dom";
import Content from "./Content";
import ReadOnlyForm from "./ReadOnlyForm";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

// CSS
const Header = styled.section`
  background-color: #ffffff;
`;

const Button = styled.button`
  margin: 10px;
`;

const Router = () => {
  const navigate = useNavigate();
  const handleBackButton = () => {
    return navigate("/");
  };
  return (
    <div>
      {/* App Header */}
      <Header>
        <Button onClick={handleBackButton}>Back</Button>
      </Header>
      <Routes>
        <Route path="/" index element={<Content />} />
        <Route path="/readonlyform" element={<ReadOnlyForm />} />
      </Routes>
    </div>
  );
};

export default Router;
