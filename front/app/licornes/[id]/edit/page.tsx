import Form from "next/form";
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
        <input type="hidden" name="id" value={licorne.id} />
        <input name="name" defaultValue={licorne.name} required />
        <input type="number" name="age" defaultValue={licorne.age} required />
        <input name="color" defaultValue={licorne.color} required />
        <input
          type="number"
          name="weight"
          defaultValue={licorne.weight}
          required
        />
        <button type="submit">Modifier</button>
      </Form>
      <Form action={deleteLicorne} className="flex flex-col gap-2 mt-4">
        <input type="hidden" name="id" value={licorne.id} />
        <button type="submit" className="text-red-500">
          Supprimer
        </button>
      </Form>
    </div>
  );
}
