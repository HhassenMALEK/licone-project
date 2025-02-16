import Form from "next/form";
import Link from "next/link";
import { addLicorne } from "../actions";
export default function AddLicornePage() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <h1 className="text-green-500 mt-4 mb-6">Ajouter une licorne</h1>
      <Form action={addLicorne} className="flex flex-col gap-4">
        <table className="table-auto">
          <tbody>
            <tr>
              <td className="pr-4">Nom:</td>
              <td>
                <input
                  className="ml-4 border p-2"
                  name="name"
                  placeholder="Nom"
                  required
                />
              </td>
            </tr>
            <tr>
              <td className="pr-4">Age:</td>
              <td>
                <input
                  className="ml-4 border p-2"
                  type="number"
                  name="age"
                  placeholder="Age"
                  required
                />
              </td>
            </tr>
            <tr>
              <td className="pr-4">Couleur:</td>
              <td>
                <input
                  className="ml-4 border p-2"
                  name="color"
                  placeholder="Couleur"
                  required
                />
              </td>
            </tr>
            <tr>
              <td className="pr-4">Poids:</td>
              <td>
                <input
                  className="ml-4 border p-2"
                  type="number"
                  name="weight"
                  placeholder="Poids"
                  required
                />
              </td>
            </tr>
          </tbody>
        </table>

        <button
          type="submit"
          className="text-red-500 mt-4 p-2 bg-gray-100 border"
        >
          Ajouter
        </button>
      </Form>

      <p className="text-blue-500 mt-4 mb-6">
        <Link href="/licornes">Retour</Link>
      </p>
    </div>
  );
}
