import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Button from "./Button";
import Nav from "./Nav";
import { NavLink } from "react-router-dom";

function Notes() {
  const notes = useSelector((state) => {
    return state.noteReducer.value;
  });

  const [sorted, setSorted] = useState(false);

  const sortNotes = (e) => {
    e.preventDefault();
    setSorted(!sorted);
  };

  const noteMap = () => {
    let sortedData = [...notes];
    if (sorted) {
      sortedData = sortedData.sort((a, b) => (a.date > b.date ? 1 : -1));
    }
    return sortedData.map((n) => {
      return (
        <StickyNote key={n.id}>
          <NoteDate>{n.date}</NoteDate>
          <NoteName>{n.name}</NoteName>
          <NoteContent>{n.note}</NoteContent>
        </StickyNote>
      );
    });
  };

  return (
    <div>
      <NavLinks>
        <Nav link="/notes/new">Add Note</Nav>
        {notes.length != 0 ? (
          <Sort
            type="Sort"
            value="Sort"
            id="Sort"
            onClick={sortNotes}
            cssOptions={{
              border: "none",
              opacity: "0.8",
              textdecor: "underline",
              fontsize: "24px",
              width: "10%",
              float: "left",
              background: "none",
            }}
          >
            {sorted ? "Undo" : "Sort Notes"}
          </Sort>
        ) : null}
      </NavLinks>
      {notes.length === 0 ? (
        <NoNotes> Notes will be displayed here </NoNotes>
      ) : null}
      <NoteContainer>{noteMap()}</NoteContainer>
    </div>
  );
}
const NoteContainer = styled.div`
  margin-top: 11%;
  margin-left: 18%;
`;
const StickyNote = styled.div`
  float: left;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  color: #000;
  background: #ffc;
  display: block;
  height: 20em;
  width: 20em;
  margin: 20px;
  box-shadow: 5px 5px 7px rgba(33, 33, 33, 0.7);
  transition: transform 0.15s linear;
  &:nth-child(even) {
    transform: rotate(4deg);
    position: relative;
    top: 5px;
    background: #cfc;
  }
  &:nth-child(3n) {
    transform: rotate(-5deg);
    position: relative;
    top: -5px;
    background: #ccf;
  }
  &:nth-child(5n) {
    transform: rotate(5deg);
    position: relative;
    top: -10px;
  }
  &:hover,
  &:focus {
    box-shadow: 10px 10px 7px rgba(0, 0, 0, 0.7);
    transform: scale(1.25);
    position: relative;
    z-index: 5;
  }
`;

const NoteName = styled.h1`
  font-weight: bold;
  font-family: "Sue Ellen Francisco", cursive;
  font-size: 35px;
  text-decoration: underline;
  text-align: center;
  margin: 0;
`;

const NoteDate = styled.h4`
  font-size: 16px;
  text-align: left;
  font-family: "Sue Ellen Francisco", cursive;
  padding-left: 5px;
  padding-bottom: 0;
  margin: 0;
`;

const NoteContent = styled.p`
  font-family: "Sue Ellen Francisco", cursive;
  font-size: 20px;
  margin: 0;
  flex-wrap: wrap;
  justify-content: center;
  padding-left: 1em;
  padding-right: 1em;
  word-wrap: break-word;
  white-space: pre-wrap;
  word-break: break-word;
`;

const NoNotes = styled.h1`
  font-size: 28px;
  font-family: "Sue Ellen Francisco", cursive;
  text-align: center;
`;

const Sort = styled(Button)`
  float: left;
  font-size: 30px;
`;

const NavLinks = styled.div`
  display: inline;
`;
export default Notes;
