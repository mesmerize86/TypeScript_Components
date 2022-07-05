import React, { ChangeEvent, useState } from "react";
import { Input, TextArea, Button } from "./styles";
import { Person } from "./Types";

interface IProps {
  handleAddPeople: (newUser: Person) => void;
}

const AddUser = ({ handleAddPeople }: IProps) => {
  const [input, setInput] = useState({
    name: "",
    age: "",
    url: "",
    note: ""
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setInput({
      ...input,
      [event.target.name]: event.target.value
    });
  };

  const handleAddUser = (): void => {
    let age = parseInt(input.age, 10);
    if (!input.name || !input.age || !age || !input.url) return;
    let newUser: Person = {
      name: input.name,
      age: age,
      url: input.url,
      note: input.note
    };
    handleAddPeople(newUser);
  };

  return (
    <div style={{ maxWidth: "500px", margin: "0 auto" }}>
      <h1>Add User</h1>
      <Input
        type="text"
        placeholder="Name"
        onChange={handleChange}
        name="name"
        value={input.name}
      />
      <Input
        type="text"
        placeholder="Age"
        onChange={handleChange}
        name="age"
        value={input.age}
      />
      <Input
        type="text"
        placeholder="URL"
        onChange={handleChange}
        name="url"
        value={input.url}
      />
      <TextArea
        rows="4"
        cols="50"
        placeholder="Note"
        onChange={handleChange}
        name="note"
        value={input.note}
      />
      <Button onClick={handleAddUser}>Submit</Button>
    </div>
  );
};

export default AddUser;
