import Link from "next/link";

export default function({ actes }) {
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-lightBlue-900 text-white">
        <h1>Les csaar</h1>
        <ul>
          {actes.map((acte) => (
            <li
              className="flex items-center bg-gray-200 p-10 mx-5 my-30 rounded"
              key={acte.id}
            >
              <div className="text-white items-center">
                <button>
                  Icon
                </button>
              </div>
              <div className="text-white items-center">
                <Link href={`/actes/${acte.id}`}>
                  <a>
                    <h3>{acte.code}</h3>
                    <p>{acte.libelle}</p>
                  </a>
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
  const actes = await fetch("http://localhost:3001/actes").then((response) =>
    response.json()
  );
  return {
    props: {
      actes,
    },
    revalidate: 3600,
  };
}
