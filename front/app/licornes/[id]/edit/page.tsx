import Form from "next/form";
import Link from "next/link";
import { updateLicorne, deleteLicorne } from "../../actions";

export default async function EditLicornePage({
  params,
}: {
  params: { id: string };
}) {
  const res = await fetch(`http://localhost:3001/licornes/${params.id}`);
  const licorne = await res.json();

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <h1 className="text-green-500 mt-4 mb-6">Modifier</h1>
      <h2>{licorne.name}</h2>
      <Form action={updateLicorne} className="flex flex-col gap-2">
        <input
          className="ml-4 border p-2"
          type="hidden"
          name="id"
          value={licorne.id}
        />
        <input
          className="ml-4 border p-2"
          name="name"
          defaultValue={licorne.name}
          required
        />
        <input
          className="ml-4 border p-2"
          type="number"
          name="age"
          defaultValue={licorne.age}
          required
        />
        <input
          className="ml-4 border p-2"
          name="color"
          defaultValue={licorne.color}
          required
        />
        <input
          className="ml-4 border p-2"
          type="number"
          name="weight"
          defaultValue={licorne.weight}
          required
        />
        <button type="submit" className="text-red-500">
          Modifier
        </button>
      </Form>
      <Form action={deleteLicorne} className="flex flex-col gap-2 mt-4">
        <input type="hidden" name="id" value={licorne.id} />
        <button type="submit" className="text-red-500">
          Supprimer
        </button>
      </Form>
      <p className="text-blue-500 mt-4 mb-6">
        <Link href="/licornes">Retour</Link>
      </p>
    </div>
  );
}
