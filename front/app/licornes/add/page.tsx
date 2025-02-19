"use client";

import React, { useState, FormEvent } from "react";
import { createLicorne } from "../actions";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Button } from "@fluentui/react-components";

export default function AddLicornePage() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); // Empêche le rechargement de la page
    setIsLoading(true); // Active le chargement
    setError(null); // Réinitialise les erreurs

    const formData = new FormData(event.currentTarget); // Récupère les valeurs du formulaire
    const response = await createLicorne(formData);

    if (response.success) {
      redirect(`/licornes/`);
    } else {
      setError(response.error || "Une erreur inconnue est survenue.");
      setIsLoading(false); // Désactive le chargement en cas d'échec
    }
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <h1 className="text-green-500 mt-4 mb-6">Ajouter une licorne</h1>
      <form onSubmit={onSubmit} className="flex flex-col gap-4 w-80">
        <input className="border p-2" name="name" placeholder="Nom" required />
        <input className="border p-2" name="age" placeholder="Age" required />
        <input
          className="border p-2"
          name="color"
          placeholder="Couleur"
          required
        />
        <input
          className="border p-2"
          name="weight"
          placeholder="Poids"
          required
        />

        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Ajout en cours..." : "Ajouter"}
        </Button>

        {/* Bouton avec gestion du chargement */}
        {/* <button
                    type="submit"
                    className={`text-white bg-blue-500 p-2 rounded ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={isLoading}
                >
                    {isLoading ? 'Ajout en cours...' : 'Ajouter'}
                </button> */}
      </form>

      {/* Affichage des erreurs si échec */}
      {error && <p className="text-red-500 mt-4">{error}</p>}

      <p className="text-blue-500 mt-4">
        <Link href="/licornes">Retour</Link>
      </p>
    </div>
  );
}
