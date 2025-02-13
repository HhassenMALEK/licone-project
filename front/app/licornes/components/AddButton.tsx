import Link from "next/link";

export default function ButtonComponent() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Link href="/destination-page">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Cliquez ici
        </button>
      </Link>
    </div>
  );
}
