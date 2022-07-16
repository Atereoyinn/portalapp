import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Axios } from "./Api";

const Div = styled.div`
  height: 100vh;
  margin: o;
  padding: 20px;
  color: white;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Label = styled.label`
  font-size: 25px;
  margin: auto;
  padding: 5px;
`;
const Input = styled.input`
  width: 40vw;
  padding: 10px;
  border: 1px solid gray;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  width: 40vw;
  padding: 10px;
  border: 1px solid gray;
  border-radius: 5px;
`;

const Button = styled.button`
  width: 100px;
  margin: 15px;
  padding: 10px;
  border: none;
  border-radius: 25px;
  font-size: 20px;
  background: gray;
  cursor: pointer;
`;

const Form = ({ sourceData }) => {
  const navigate = useNavigate();

  const [disable, setDisable] = useState(false);
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [request, setRequest] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const nameMap = sourceData.map((el) => el.name);
    if (event.target.name === nameMap) {
      setDisable(true);
    }
    navigate("notify");
    Axios.post("api", {
      name,
      title,
      request,
    })
      .then((response) => console.log("posting data", response))
      .catch((err) => console.log(err));
  };

  return (
    <Div>
      <FormContainer onSubmit={handleSubmit}>
        <Label>Username:</Label>
        <Input
          required
          value={name}
          placeholder="Please enter your name"
          onChange={(e) => setName(e.target.value)}
        />

        <Label>Title:</Label>
        <Input
          required
          value={title}
          placeholder="Give the most suitable title to your request"
          onChange={(e) => setTitle(e.target.value)}
        />

        <Label>Description:</Label>
        <TextArea
          required
          rows="5"
          value={request}
          placeholder="write the description of your request"
          onChange={(e) => setRequest(e.target.value)}
        />
        <Button type="submit" disabled={disable}>
          {" "}
          Submit{" "}
        </Button>
      </FormContainer>
    </Div>
  );
};

export default Form;
