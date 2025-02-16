import Link from "next/link";

export default async function LicorneDetailPage(
  props: {
    params: Promise<{ id: string }>;
  }
) {
  const params = await props.params;
  const res = await fetch(`http://localhost:3001/licornes/${params.id}`);

  if (!res.ok) {
    return <h1>Erreur lors de la récupération des données</h1>;
  }

  const licorne = await res.json();

  if (!licorne) {
    return <h1>Licorne non trouvée</h1>;
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <h1 className="text-green-500 mt-4 mb-6">Détails de {licorne.name}</h1>
      <table className="table-auto border-collapse border-gray-300">
        <thead>
          <tr>
            <th className="px-4 py-2 border border-gray-300 text-left">
              Caractéristique
            </th>
            <th className="px-4 py-2 border border-gray-300 text-left">
              Valeur
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 border border-gray-300">Âge</td>
            <td className="px-4 py-2 border border-gray-300">
              {licorne.age} ans
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-gray-300">Couleur</td>
            <td className="px-4 py-2 border border-gray-300">
              {licorne.color}
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-gray-300">Poids</td>
            <td className="px-4 py-2 border border-gray-300">
              {licorne.weight} kg
            </td>
          </tr>
        </tbody>
      </table>
      <p className="text-blue-500 mt-4 mb-6">
        <Link href="/licornes">Retour</Link>
      </p>
    </div>
  );
}
