import React, { useState, useRef } from "react";
import Input from "./Input";
import TextArea from "./TextArea";
import Button from "./Button";
import styled from "styled-components";
import { useParams } from "react-router";
import Nav from "./Nav";
import { updateNote } from "../Redux/Actions/NoteAction";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

function UpdateNote(props) {
  const notes = useSelector((state) => {
    return state.noteReducer.value;
  });
  console.log(notes);
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
      dispatch(updateNote(formData.id, formData.name));
      alert("Note Updated");
    }
  };

  return (
    <div>
      <Nav link="/">View Notes</Nav>
      <OuterForm onSubmit={handleSubmit}>
        <FormContent>
          {
            <ErrorMessage
              ref={(element) => (emptyData.current["name"] = element)}
            ></ErrorMessage>
          }
          <Input
            type="text"
            name="name"
            value={formData.name}
            placeholder="Enter Your Name"
            onChange={(e) => handleChange(e, "name")}
            onBlur={(e) => handleBlur("name")}
          />
        </FormContent>
        <FormContent>
          {
            <ErrorMessage
              ref={(element) => (emptyData.current["date"] = element)}
            ></ErrorMessage>
          }
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
          {
            <ErrorMessage
              ref={(element) => (emptyData.current["note"] = element)}
            ></ErrorMessage>
          }
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
      </OuterForm>
    </div>
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
export default UpdateNote;
