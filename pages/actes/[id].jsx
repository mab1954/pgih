import Link from "next/link";


export default function Acte({ acte }) {
  return (
    <>
      <>
        <div className="bg-gray-500 p-10 mx-5 my-4 rounded items-center text-white">
          <Link href="/actes">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Retour vers les actes
            </button>
          </Link>
          <div className="flex flex-row">
            <div className="flex-none w-16 h-16 justify-center items-center">
              Code
            </div>
            <div className="flex-grow flex-wrap h-16 text-white">
              <h1>{acte.code}</h1>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="flex-none w-16 h-16 justify-center items-center">
              Libelle
            </div>
            <div className="flex-grow flex-wrap h-16 text-white">
              <p>{acte.libelle}</p>
            </div>
          </div>
        </div>
      </>
    </>
  );
}

export async function getStaticProps({ params }) {
  const acte = await fetch(
    `http://localhost:3001/actes/${params.id}`
  ).then((response) => response.json());
  return {
    props: {
      acte,
    },
  };
}

export async function getStaticPaths() {
  const actes = await fetch("http://localhost:3001/actes").then((response) =>
    response.json()
  );
  return {
    paths: actes.map((acte) => ({
      params: { id: acte.id.toString() },
    })),
    fallback: false,
  };
}
