import Link from "next/link";

export default function({ consultations }) {
  return (
    <>
      <div className="flex flex-row w-full shadow-lg rounded justify-center text-center text-white">
        <h1>Les consultations</h1>
        <ul>
          {consultations.map((consultation) => (
            <li
              className="flex flex-row bg-gray-500 p-10 mx-5 my-4 rounded items-center"
              key={consultation.id}
            >
              
              <div className="flex-grow flex-wrap h-16 text-white">
                <h3>{consultation.nom}</h3>
                <p>{consultation.prenom}</p>
                <Link href={`/consultations/${consultation.id}`}>
                  <a className="bg-gray-100 text-blue-700 m-2 rounded px-2">Voir details</a>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export async function getStaticProps() {
  let baseUrl = 'http://localhost:8080';
  if(process.env.Vercel_URL) {
    baseUrl = process.env.Vercel_URL;
  }
  const consultations = await fetch(`${baseUrl}/api/consultations`).then((res) => res.json());
  
  return {
    props: {
      consultations,
    },
    revalidate: 3600,
  };
}
