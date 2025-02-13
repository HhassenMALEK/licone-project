import Form from "next/form";
import Link from "next/link";
import { addLicorne } from "../actions";

export default function AddLicornePage() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <h1 className="text-green-500 mt-4 mb-6">Ajouter une licorne</h1>
      <Form action={addLicorne} className="flex flex-col gap-2">
        <input name="name" placeholder="Nom" required />
        <input type="number" name="age" placeholder="Âge" required />
        <input name="color" placeholder="Couleur" required />
        <input type="number" name="weight" placeholder="Poids" required />
        <button type="submit">Ajouter</button>
      </Form>
      <p className="text-blue-500 mt-4 mb-6">
        <Link href="/licornes">Retour</Link>
      </p>
    </div>
  );
}
