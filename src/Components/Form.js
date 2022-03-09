import Input from "./Input";
import TextArea from "./TextArea";
import Button from "./Button";
import styled from "styled-components";
import Nav from "./Nav";

function Form(props) {
  return (
    <div>
      <Nav link="/">View Notes</Nav>
      <OuterForm onSubmit={props.submit}>
        <FormContent>
          {
            <ErrorMessage
              ref={(element) => (props.emptyData.current["name"] = element)}
            ></ErrorMessage>
          }
          <Input
            type="text"
            name="name"
            value={props.formData.name}
            placeholder="Enter Your Name"
            onChange={(e) => props.handleChange(e, "name")}
            onBlur={(e) => props.handleBlur("name")}
          />
        </FormContent>
        <FormContent>
          {
            <ErrorMessage
              ref={(element) => (props.emptyData.current["date"] = element)}
            ></ErrorMessage>
          }
          <Input
            type="date"
            name="date"
            placeholder=""
            value={props.formData.date}
            onChange={(e) => props.handleChange(e, "date")}
            onBlur={(e) => props.handleBlur("date")}
          />
        </FormContent>
        <FormContent>
          {
            <ErrorMessage
              ref={(element) => (props.emptyData.current["note"] = element)}
            ></ErrorMessage>
          }
          <TextArea
            name="note"
            placeholder="Enter Note Here"
            value={props.formData.note}
            onChange={(e) => props.handleChange(e, "note")}
            onBlur={(e) => props.handleBlur("note")}
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
            {props.button}
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

export default Form;
