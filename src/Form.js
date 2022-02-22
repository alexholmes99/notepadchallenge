import React, { useState } from "react";
import Input from "./Input";
import TextArea from "./TextArea";
import styled from "styled-components";

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

  return (
    <OuterForm>
      <FormContent>
        {emptyData.name && <h2>Name required</h2>}
        <Input
          type="text"
          name="name"
          placeholder="Enter Your Name"
          onChange={(e) => handleChange(e, "name")}
          onBlur={(e) => handleBlur(e.target.value, "name")}
        />
      </FormContent>
      <FormContent>
        {emptyData.date && <h2>Date Required</h2>}
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
        {emptyData.note && <h2>Note Required</h2>}
        <TextArea
          name="note"
          placeholder="Enter Note Here"
          value={formData.note}
          onChange={(e) => handleChange(e, "note")}
          onBlur={(e) => handleBlur(e.target.value, "note")}
        />
      </FormContent>
    </OuterForm>
  );
}

const OuterForm = styled.div`
  display: flex;
  margin-top: 4%;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  postion: relative;
`;

const FormContent = styled.div`
  font-size: 12px;
  font-family: "Open Sans", sans-serif;
  color: #e33d3d;
  padding: 20px;
`;

export default Form;
