"use server";

import { redirect } from "next/navigation";

export async function addLicorne(formData: FormData) {
  const newLicorne = {
    name: formData.get("name"),
    age: Number(formData.get("age")),
    color: formData.get("color"),
    weight: Number(formData.get("weight")),
  };

  await fetch("http://localhost:3001/licornes", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newLicorne),
  });

  redirect("/licornes"); // Redirection vers licornes après l'ajout d'une licorne
}

export async function updateLicorne(formData: FormData) {
  const updatedLicorne = {
    name: formData.get("name"),
    age: Number(formData.get("age")),
    color: formData.get("color"),
    weight: Number(formData.get("weight")),
  };

  const id = formData.get("id");

  await fetch(`http://localhost:3001/licornes/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedLicorne),
  });

  redirect(`/licornes/${id}`); // Redirection vers la page de détails
}

export async function deleteLicorne(formData: FormData) {
  const id = formData.get("id");

  await fetch(`http://localhost:3001/licornes/${id}`, {
    method: "DELETE",
  });

  redirect("/licornes"); // Redirection après suppression
}
