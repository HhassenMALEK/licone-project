"use server";
import { redirect } from "next/navigation";
// POST
export async function createLicorne(formData: FormData) {
  await new Promise((r) => setTimeout(r, 2000));
  const newLicorne = {
    name: String(formData.get("name")),
    age: Number(formData.get("age")),
    color: String(formData.get("color")),
    weight: Number(formData.get("weight")),
  };

  // Vérification des champs
  if (
    !newLicorne.name ||
    isNaN(newLicorne.age) ||
    !newLicorne.color ||
    isNaN(newLicorne.weight)
  ) {
    return {
      success: false,
      error: "Tous les champs doivent être remplis correctement.",
    }; //back
  }

  try {
    const response = await fetch("http://localhost:3001/licornes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newLicorne),
    });

    if (!response.ok) {
      throw new Error("impossible de récupérer les données, essayez encore");
    }

    return { success: true }; // Succès
  } catch (error) {
    return { success: false, error: (error as Error).message };
  }
}

//PUT
export async function updateLicorne(formData: FormData) {
  const updatedLicorne = {
    name: formData.get("name"),
    age: Number(formData.get("age")),
    color: formData.get("color"),
    weight: Number(formData.get("weight")),
  };

  const id = formData.get("id");

  try {
    const response = await fetch(`http://localhost:3001/licornes/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedLicorne),
    });

    if (!response.ok) {
      throw new Error("impossible de récupérer les données, essayez encore");
    }

    return { success: true };
  } catch (error) {
    return { success: false, error: (error as Error).message };
  }
}

//DELELETE
export async function deleteLicorne(formData: FormData) {
  const id = formData.get("id");

  await fetch(`http://localhost:3001/licornes/${id}`, {
    method: "DELETE",
  });

  redirect("/licornes"); // Redirection a la liste des licornes après suppression
}
