import useSwr from 'swr'
import Link from "next/link";


export default function Venues({venues}) {
  return (
    <>
      <div className="flex flex-row w-full shadow-lg rounded justify-center text-center text-white">
        <ul>
          {venues.map((venue) => (
            <li
              className="flex flex-row bg-gray-500 w-full p-10 mx-5 my-4 rounded items-center"
              key={venue.id}
            >
              <div className="flex-grow flex-wrap h-16 text-white">
                <h3>
                  {venue.nom} {venue.prenom}
                  <span className="mx-4">
                    IPP : {venue.ipp} IEP : {venue.iep}
                  </span>
                </h3>
                <Link href={`/venues/${venue.id}`}>
                  <a className="bg-gray-100 text-blue-700 m-2 rounded px-2">
                    Voir details
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
  let baseUrl = 'https://pgih.herokuapp.com';
  if(process.env.Vercel_URL) {
    baseUrl = process.env.Vercel_URL;
  }
  const venues = await fetch(`${baseUrl}/api/venues`).then((res) => res.json());
  return {
    props: {
      venues,
    },
    revalidate: 3600,
  };
}
