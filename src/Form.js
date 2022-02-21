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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleBlur = (e) => {
    if (e.target.value == "") {
      alert(e.target.name + " is required");
    }
  };

  return (
    <InnerForm>
      <Element>
        <Input
          type="text"
          name="name"
          placeholder="Enter Your Name"
          onChange={(e) => handleChange(e, "name")}
          onBlur={handleBlur}
        />
      </Element>
      <Element>
        <Input
          type="date"
          name="date"
          placeholder=""
          value={formData.date}
          onChange={(e) => handleChange(e, "date")}
          onBlur={handleBlur}
        />
      </Element>
      <Element>
        <TextArea
          name="note"
          placeholder="Enter Note Here"
          value={formData.note}
          onChange={(e) => handleChange(e, "note")}
          onBlur={handleBlur}
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
