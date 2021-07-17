import Link from "next/link";
import StarBorderIcon from "@material-ui/icons/StarBorder";

export default function({ actes }) {
  return (
    <>
      <div className="flex flex-row w-full shadow-lg rounded justify-center text-center text-white">
        <h1>Les csaar</h1>
        <ul>
          {actes.map((acte) => (
            <li
              className="flex flex-row bg-gray-500 p-10 mx-5 my-4 rounded items-center"
              key={acte.id}
            >
              <div className="flex-none w-16 h-16 justify-center items-center">
                <button>
                  <svg
                    className="h-16 w-16"
                    fill={` ${acte.favori ? "yellow" : "gray"} `}
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex-grow flex-wrap h-16 text-white">
                <h3>{acte.code}</h3>
                <p>{acte.libelle}</p>
                <Link href={`/actes/${acte.id}`}>
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
