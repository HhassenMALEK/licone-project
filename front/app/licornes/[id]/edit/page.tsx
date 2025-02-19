"use client";

import { useState, useEffect, FormEvent } from "react";
import Link from "next/link";
import { updateLicorne, deleteLicorne } from "../../actions";
import { redirect } from "next/navigation";
import Form from "next/form";

export default function EditLicornePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const [id, setId] = useState<string | null>(null);
  const [licorne, setLicorne] = useState<{
    id: string;
    name: string;
    age: number;
    color: string;
    weight: number;
  } | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Récupération de l'ID depuis `params`
  useEffect(() => {
    async function fetchParams() {
      const resolvedParams = await params;
      setId(resolvedParams.id);
    }
    fetchParams();
  }, [params]);

  // Récupération des données de la licorne
  useEffect(() => {
    if (!id) return;
    async function fetchLicorne() {
      const res = await fetch(`http://localhost:3001/licornes/${id}`);
      if (!res.ok) throw new Error("Erreur de récupération des données");
      const data = await res.json();
      setLicorne(data);
    }
    fetchLicorne();
  }, [id]);

  //  mise à jour de la licorne
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    setError(null);

    const formData = new FormData(event.currentTarget);
    const response = await updateLicorne(formData);

    if (response.success) {
      redirect(`/licornes/${id}`);
    } else {
      setError(response.error || "Une erreur inconnue est survenue.");
      setIsLoading(false);
    }
  }

  // Fonction pour la suppression de la licorne
  //   async function handleDelete (){
  //         if (!licorne) return
  //         setIsLoading(true)
  //         setError(null)

  //         const response = await deleteLicorne(licorne.id)

  //         if (response.success) {
  //             redirect('/licornes')
  //         } else {
  //             setError(response.error || 'Une erreur inconnue est survenue.')
  //             setIsLoading(false)
  //         }
  //     }

  // Si les données ne sont pas encore chargées
  if (!id || !licorne) return <p>Chargement en cours...</p>;

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <h1 className="text-green-500 mt-4 mb-6">Page de modification</h1>

      {/* Formulaire de mise à jour */}
      <form onSubmit={onSubmit} className="flex flex-col gap-2">
        <input type="hidden" name="id" value={licorne.id} />
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

        <button
          type="submit"
          className={`text-white bg-blue-500 p-2 rounded ${
            isLoading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={isLoading}
        >
          {isLoading ? "Modification en cours..." : "Modifier"}
        </button>
      </form>

      {/* Bouton de suppression */}

      {/* <form
                 onSubmit={handleDelete}
                 className="flex flex-col gap-2"
               
            >
                <button
                   type="submit"
                   className={`text-white bg-red-500 p-2  ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                   disabled={isLoading}
                >
                   {isLoading ? 'Suppression en cours...' : 'Supprimer'}
                </button>
            </form> */}

      <Form action={deleteLicorne} className="flex flex-col gap-2 mt-4">
        <input type="hidden" name="id" value={licorne.id} />
        <button type="submit" className="text-white bg-blue-500 p-2 rounded ">
          Supprimer
        </button>
      </Form>

      {/* Message d'erreur */}
      {error && <p className="text-red-500 mt-4">{error}</p>}

      <p className="text-blue-500 mt-4">
        <Link href="/licornes">Retour</Link>
      </p>
    </div>
  );
}
