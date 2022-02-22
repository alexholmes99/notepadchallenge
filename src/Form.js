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
    <InnerForm>
      <Element>
        {emptyData.name && <h2>Name required</h2>}
        <Input
          type="text"
          name="name"
          placeholder="Enter Your Name"
          onChange={(e) => handleChange(e, "name")}
          onBlur={(e) => handleBlur(e.target.value, "name")}
        />
      </Element>
      <Element>
        {emptyData.date && <h2>Date Required</h2>}
        <Input
          type="date"
          name="date"
          placeholder=""
          value={formData.date}
          onChange={(e) => handleChange(e, "date")}
          onBlur={(e) => handleBlur(e.target.value, "date")}
        />
      </Element>
      <Element>
        {emptyData.note && <h2>Note Required</h2>}
        <TextArea
          name="note"
          placeholder="Enter Note Here"
          value={formData.note}
          onChange={(e) => handleChange(e, "note")}
          onBlur={(e) => handleBlur(e.target.value, "note")}
        />
      </Element>
    </InnerForm>
  );
}

export default Form;

const InnerForm = styled.div`
  display: flex;
  margin-top: 10%;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  postion: relative;
`;

const Element = styled.div`
  padding: 30px;
`;
