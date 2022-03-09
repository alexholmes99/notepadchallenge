import React, { useState, useRef } from "react";
import Form from "./Form";
import styled from "styled-components";
import { useParams } from "react-router";
import { updateNote } from "../Redux/Actions/NoteAction";
import { useSelector, useDispatch } from "react-redux";

function UpdateNote(props) {
  const notes = useSelector((state) => {
    return state.noteReducer.value;
  });

  const { id: paramsId } = useParams();

  const prevNote = notes.find((n) => n.id === paramsId);

  const [formData, setFormData] = useState({
    name: prevNote.name,
    date: prevNote.date,
    note: prevNote.note,
    id: prevNote.id,
  });

  const dispatch = useDispatch();

  const emptyData = useRef({});

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
      if (formData[key] == "") {
        emptyValues = true;
      }
    });
    return emptyValues;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const emptyValues = validateSubmit();
    if (!emptyValues) {
      dispatch(updateNote(formData));
      alert("Note Updated");
    }
  };

  return (
    <Form
      submit={handleSubmit}
      handleChange={handleChange}
      handleBlur={handleBlur}
      formData={formData}
      emptyData={emptyData}
      button="Update"
    />
  );
}
export default UpdateNote;
