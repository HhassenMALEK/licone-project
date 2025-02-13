import Link from "next/link";

export default async function LicornesPage() {
  const res = await fetch("http://localhost:3001/licornes");
  const licornes = await res.json();

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <h1 className="text-green-500 mt-4 mb-6">Liste des Licornes</h1>

      <ul className="text-red-500">
        {licornes.map((licorne) => (
          <li key={licorne.id}>
            <Link href={`/licornes/${licorne.id}`}>{licorne.name}</Link>
            <Link
              href={`/licornes/${licorne.id}/edit`}
              className="ml-2 text-blue-500"
            >
              🖍️
            </Link>
          </li>
        ))}
      </ul>
      <p className="text-blue-500 mt-4 mb-6">
        <Link href="/licornes/add">Ajouter</Link>
      </p>
    </div>
  );
}
