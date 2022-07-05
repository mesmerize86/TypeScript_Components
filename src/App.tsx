import { useState } from "react";
import "./styles.css";
import List from "./List";
import AddUser from "./AddUser";
import { Person } from "./Types";

const data = [
  {
    name: "Bryan Thomas",
    url: "https://via.placeholder.com/150/92c952",
    age: 27,
    note: "Bryan grew up in Pensacola, Florida, the eldest of 3 children."
  },
  {
    name: "Mike Olivetto",
    url: "https://via.placeholder.com/150/92c952",
    age: 24,
    note: "It has survived not only five centuries."
  },
  {
    name: "Leo Ducati",
    url: "https://via.placeholder.com/150/92c952",
    age: 34
  }
];

export default function App() {
  const [people, setPeople] = useState<Person[]>(data);
  return (
    <div className="App">
      <table>
        <tbody>
          <List people={people} />
        </tbody>
      </table>
      <AddUser people={people} setPeople={setPeople} />
    </div>
  );
}
