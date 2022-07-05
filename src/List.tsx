import React from "react";
import { Person } from "./Types";

interface IProps {
  people: Person[];
}

const List: React.FC<IProps> = ({ people }) => {
  const renderList = (): JSX.Element[] => {
    return people.map((person) => (
      <tr key={person.age}>
        <td>
          <img src={person.url} alt={person.name} />
        </td>
        <td>{person.name}</td>
        <td>{person.age}</td>
        <td>{person.note}</td>
      </tr>
    ));
  };

  return <>{renderList()}</>;
};

export default List;
