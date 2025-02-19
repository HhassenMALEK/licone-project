import Link from "next/link";

export default async function LicornesPage() {
  const res = await fetch("http://localhost:3001/licornes");
  const licornes = await res.json();

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <h1 className="text-green-500 mt-4 mb-6">Liste des Licornes</h1>

      <ul className="list-none">
        {licornes.map((licorne) => (
          <li
            key={licorne.id}
            className="flex justify-between items-center py-2 px-4"
          >
            <span className="text-blue-500">
              <Link href={`/licornes/${licorne.id}`}>{licorne.name}</Link>
            </span>
            <span className="ml-4">
              <Link
                href={`/licornes/${licorne.id}/edit`}
                className="text-blue-500"
              >
                🖍️
              </Link>
            </span>
          </li>
        ))}
      </ul>

      <p className="text-red-500 mt-4 mb-6">
        <Link href="/licornes/add">Ajouter</Link>
      </p>
    </div>
  );
}
