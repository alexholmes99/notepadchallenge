import React, { useState, useRef } from "react";
import Form from "./Form";
import { setNote } from "../Redux/Actions/NoteAction";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

function NewNote(props) {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    note: "",
  });

  const emptyData = useRef({});

  const dispatch = useDispatch();

  const handleChange = (e, key) => {
    const newData = {
      ...formData,
      [key]: e.target.value,
    };
    setFormData(newData);
  };

  const handleBlur = (key) => {
    if (key === "id") return;
    emptyData.current[key].innerHTML =
      formData[key] === "" ? `${key} required` : "";
  };

  const validateSubmit = (e) => {
    let emptyValues = false;
    Object.keys(formData).forEach((key) => {
      handleBlur(key);
      if (formData[key] === "") {
        emptyValues = true;
      }
    });
    return emptyValues;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emptyValues = validateSubmit();
    if (!emptyValues) {
      const uniqueId = uuidv4();
      const formDataCopy = { ...formData, id: uniqueId };
      dispatch(setNote(formDataCopy));
      alert("Note Created");
    }
  };

  return (
    <Form
      submit={handleSubmit}
      handleChange={handleChange}
      handleBlur={handleBlur}
      formData={formData}
      emptyData={emptyData}
      button="Submit"
    />
  );
}
export default NewNote;
