import Link from "next/link";


export default function consultation({ consultation }) {
  return (
    <>
      <>
        <div className="bg-gray-500 p-10 mx-5 my-4 rounded items-center text-white">
          <Link href="/consultations">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Retour vers les consultations
            </button>
          </Link>
          <div className="flex flex-row">
            <div className="flex-none w-16 h-16 justify-center items-center">
              Nom
            </div>
            <div className="flex-grow flex-wrap h-16 text-white">
              <h1>{consultation.nom}</h1>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="flex-none w-16 h-16 justify-center items-center">
              Prenom
            </div>
            <div className="flex-grow flex-wrap h-16 text-white">
              <p>{consultation.prenom}</p>
            </div>
          </div>
        </div>
      </>
    </>
  );
}

export async function getStaticProps({ params }) {
  let baseUrl = 'http://localhost:8080';
  if(process.env.Vercel_URL) {
    baseUrl = process.env.Vercel_URL;
  }
  const consultation = await fetch(`${baseUrl}/api/consultations/${params.id}`).then((res) => res.json());
  return {
    props: {
      consultation
    },
  };
}

export async function getStaticPaths() {
  let baseUrl = 'http://localhost:8080';
  if(process.env.Vercel_URL) {
    baseUrl = process.env.Vercel_URL;
  }
  const consultations = await fetch(`${baseUrl}/api/consultations`).then((res) => res.json());
  return {
    paths: consultations.map((consultation) => ({
      params: { id: consultation.id.toString() }
    })),
    fallback: false
  };
}
