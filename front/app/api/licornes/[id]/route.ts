import { NextResponse } from "next/server";
type RouteParams = {
  params: {
    id: string;
  };
};

const getOneLiconrne = async (id: string) => {
  const res = await fetch(`http://localhost:3001/licornes/${id}`); // ✅ Use backticks
  const data = await res.json();
  return data;
};

//GETByID
export async function GET(res: Request, { params }: RouteParams) {
  const data = await getOneLiconrne(params.id);
  return NextResponse.json({
    message: "Données récupérées avec succès depuis le back API",
    data,
  });

  console.log(params.id);
}
//PUT;
export async function PUT(req: Request, { params }: RouteParams) {
  const { name, age, color, weight } = await req.json();
  const licorne = await getOneLiconrne(params.id);
  const newLicorne = {
    ...licorne,
    name: name || licorne.name,
    age: age || licorne.age,
    color: color || licorne.color,
    weight: weight || licorne.weight,
  };
  await fetch(`http://localhost:3001/licornes/${params.id}`, {
    method: "PUT",
    body: JSON.stringify(newLicorne),
    headers: { "Content-Type": "application/json" },
  });
  return NextResponse.json({
    message: "Licorne modifié avec succés",
    data: newLicorne,
  });
}
//DELETE
export async function DELETE(req: Request, { params }: RouteParams) {
  await fetch(`http://localhost:3001/licornes/${params.id}`, {
    method: "DELETE",
  });
  return NextResponse.json({
    message: `Licorne avec l'id ${params.id} supprimée avec succés`,
  });
}
