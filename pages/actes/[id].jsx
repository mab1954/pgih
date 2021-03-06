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
  let baseUrl = 'https://pgih.herokuapp.com';
  if(process.env.Vercel_URL) {
    baseUrl = process.env.Vercel_URL;
  }
  const acte = await fetch(`${baseUrl}/api/actes/${params.id}`).then((res) => res.json());
  return {
    props: {
      acte
    },
  };
}

export async function getStaticPaths() {
  let baseUrl = 'https://pgih.herokuapp.com';
  if(process.env.Vercel_URL) {
    baseUrl = process.env.Vercel_URL;
  }
  const actes = await fetch(`${baseUrl}/api/actes`).then((res) => res.json());
  return {
    paths: actes.map((acte) => ({
      params: { id: acte.id.toString() }
    })),
    fallback: false
  };
}
