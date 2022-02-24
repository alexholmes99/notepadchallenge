import React, { useState } from "react";
import Input from "./Input";
import TextArea from "./TextArea";
import Button from "./Button";
import styled from "styled-components";
import Logo from "./Logo";

function Form(props) {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    note: "",
  });

  const [emptyData, setEmptyData] = useState({
    name: false,
    date: false,
    note: false,
  });

  const handleChange = (e, key) => {
    const newData = {
      ...formData,
      [key]: e.target.value,
    };
    setFormData(newData);
  };

  const handleBlur = (value, key) => {
    setEmptyData((previousState) => {
      return {
        ...previousState,
        [key]: value === "",
      };
    });
  };
  const validateSubmit = (e) => {
    let isValidated = true;
    Object.keys(formData).forEach((key) => {
      if (formData[key] == "") {
        setEmptyData((prev) => {
          return {
            ...prev,
            [key]: true,
          };
        });
        isValidated = false;
      }
    });
    return isValidated;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValidated = validateSubmit();
    if (isValidated == true) {
      // Assign Note Content Here
    }
  };

  return (
    <OuterForm onSubmit={handleSubmit}>
      <FormContent>
        {emptyData.name && <ErrorMessage>Name required</ErrorMessage>}
        <Input
          type="text"
          name="name"
          placeholder="Enter Your Name"
          onChange={(e) => handleChange(e, "name")}
          onBlur={(e) => handleBlur(e.target.value, "name")}
        />
      </FormContent>
      <FormContent>
        {emptyData.date && <ErrorMessage>Date Required</ErrorMessage>}
        <Input
          type="date"
          name="date"
          placeholder=""
          value={formData.date}
          onChange={(e) => handleChange(e, "date")}
          onBlur={(e) => handleBlur(e.target.value, "date")}
        />
      </FormContent>
      <FormContent>
        {emptyData.note && <ErrorMessage>Note Required</ErrorMessage>}
        <TextArea
          name="note"
          placeholder="Enter Note Here"
          value={formData.note}
          onChange={(e) => handleChange(e, "note")}
          onBlur={(e) => handleBlur(e.target.value, "note")}
        />
      </FormContent>
      <FormContent>
        <Button
          type="Submit"
          value="Submit"
          cssOptions={{
            border: "none",
            opacity: "0.8",
            color: "#e33d3d",
            fontsize: "24px",
          }}
        >
          Submit
        </Button>
      </FormContent>
    </OuterForm>
  );
}

const OuterForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 2%;
  postion: relative;
`;

const FormContent = styled.div`
  padding: 10px;
  margin: 0%;
`;

const ErrorMessage = styled.h2`
  font-size: 18px;
  font-family: "Sue Ellen Francisco", cursive;
  color: #e33d3d;
`;

export default Form;
