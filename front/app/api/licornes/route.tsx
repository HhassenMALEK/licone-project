import { NextResponse } from "next/server";

const getData = async () => {
  const res = await fetch(`http://localhost:3001/licornes`);
  const data = await res.json();
  return data;
};

// GET
export async function GET() {
  const data = await getData(); // Call the function
  return NextResponse.json({
    message: "Données récupérées avec succès depuis le back API",
    data,
  });
}
// POST
export async function POST(req: Request) {
  const { name, age, color, weight } = await req.json();
  if (!name || !age || !color || !weight) {
    return NextResponse.json("Veuillez remplir tous les champs ");
  }
  const licorne = {
    name,
    age,
    color,
    weight,
  };
  await fetch(`http://localhost:3001/licornes`, {
    method: "POST",
    body: JSON.stringify(licorne),
    headers: { "Content-Type": "application/json" },
  });
  return NextResponse.json({
    message: "Licorne ajouté avec succés ",
    data: licorne,
  });
}
