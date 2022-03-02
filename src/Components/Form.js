import React, { useState } from "react";
import Input from "./Input";
import TextArea from "./TextArea";
import Button from "./Button";
import styled from "styled-components";
import { setNote } from "../Redux/Actions/NoteAction";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

function Form(props) {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    note: "",
  });

  let notes = useSelector((state) => {
    return state.noteReducer.value;
  });

  const dispatch = useDispatch();

  const [modifiers, setModifiers] = useState({
    sorted: false,
  });

  const handleChange = (e, key) => {
    const newData = {
      ...formData,
      [key]: e.target.value,
    };
    setFormData(newData);
  };

  const handleBlur = (key) => {
    if (formData[key] == "") {
      document.getElementById(key).innerHTML = key + " required";
    } else {
      document.getElementById(key).innerHTML = null;
    }
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
    if (emptyValues != true) {
      document.getElementById("Sort").style.display = "flex";
      const uniqueId = uuidv4();
      const formDataCopy = { ...formData };
      const notesCopy = [...notes];
      notesCopy.push(formDataCopy);
      dispatch(setNote(notesCopy));
    }
  };

  const sortNotes = (e) => {
    console.log(modifiers.sorted);
    e.preventDefault();
    let notesNormal = [...notes];
    let notesSorted = [...notes];
    notesSorted.sort((a, b) => (a.date > b.date ? 1 : -1));
    if (!modifiers.sorted) {
      dispatch(setNote(notesSorted));
      setModifiers({ sorted: true });
    } else {
      dispatch(setNote(notesNormal));
      setModifiers({ sorted: false });
    }
  };

  return (
    <OuterForm onSubmit={handleSubmit}>
      <FormContent>
        {<ErrorMessage id="name"></ErrorMessage>}
        <Input
          type="text"
          name="name"
          placeholder="Enter Your Name"
          onChange={(e) => handleChange(e, "name")}
          onBlur={(e) => handleBlur("name")}
        />
      </FormContent>
      <FormContent>
        {<ErrorMessage id="date"></ErrorMessage>}
        <Input
          type="date"
          name="date"
          placeholder=""
          value={formData.date}
          onChange={(e) => handleChange(e, "date")}
          onBlur={(e) => handleBlur("date")}
        />
      </FormContent>
      <FormContent>
        {<ErrorMessage id="note"></ErrorMessage>}
        <TextArea
          name="note"
          placeholder="Enter Note Here"
          value={formData.note}
          onChange={(e) => handleChange(e, "note")}
          onBlur={(e) => handleBlur("note")}
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
      <FormContent>
        <Button
          type="Sort"
          value="Sort"
          id="Sort"
          onClick={sortNotes}
          cssOptions={{
            border: "none",
            opacity: "0.8",
            color: "#e33d3d",
            fontsize: "24px",
            display: "none",
          }}
        >
          Sort Notes
        </Button>
      </FormContent>
      <FormContent>
        {notes.length === 0 ? (
          <NoNotes> Notes will be displayed here </NoNotes>
        ) : null}
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

const NoNotes = styled.h1`
  font-size: 28px;
  font-family: "Sue Ellen Francisco", cursive;
`;

export default Form;
