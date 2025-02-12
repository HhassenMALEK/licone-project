export default function LicornePage() {
  // Définition des licornes (données factices)
  const licornes = [
    { name: "Licorne Magique", age: 5, color: "Arc-en-ciel", weight: 120 },
    { name: "Licorne Mystique", age: 7, color: "Bleu", weight: 135 },
    { name: "Licorne Céleste", age: 3, color: "Rose", weight: 110 },
  ];

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">Liste des Licornes 🦄</h1>
      <ul className="space-y-2">
        {licornes.map((licorne, index) => (
          <li key={index} className="border p-4 rounded-lg shadow">
            {licorne.name} - {licorne.age} ans - {licorne.color} -{" "}
            {licorne.weight} kg
          </li>
        ))}
      </ul>
    </main>
  );
}
