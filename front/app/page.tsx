import { FC } from "react";
import { licornes } from "@/app/lib/placeholder-data";

const LicornePage: FC = () => {
  return (
    <div>
      <h1>Liste des Licornes</h1>
      <ul>
        {licornes.map((licorne, index) => (
          <li key={index}>
            {licorne.name} - {licorne.age} ans - {licorne.color} -{" "}
            {licorne.weight} kg
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LicornePage;
