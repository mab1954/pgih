import Venues from "../../components/venues/Venues";

export default function Index({venues}) {
  return (
    <>
      <Venues venues={venues}/>
    </>
  );
}

export async function getStaticProps() {
  
  let baseUrl = 'https://pgih.herokuapp.com';
  
  if(process.env.Vercel_URL) {
    baseUrl = process.env.Vercel_URL;
  }
  const venues = await fetch(`${baseUrl}/api/venues`).then((res) => res.json());
  
  //const venues = await fetch("http://localhost:3001/venues").then((res) => res.json());
  return {
    props: {
      venues,
    },
    revalidate: 3600,
  };
}
