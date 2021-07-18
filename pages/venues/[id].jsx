import Link from "next/link";
import Table from "../../components/Table/Table";


export default function Venue({ venue }) {
  return (
    <>
        <Table venue={venue}/>
    </>
  );
}

export async function getStaticProps({ params }) {
  let baseUrl = 'http://localhost:8080';
  if(process.env.Vercel_URL) {
    baseUrl = process.env.Vercel_URL;
  }
  const venue = await fetch(`${baseUrl}/api/venues/${params.id}`).then((res) => res.json());
  return {
    props: {
      venue
    },
  };
}

export async function getStaticPaths() {
  let baseUrl = 'http://localhost:8080';
  if(process.env.Vercel_URL) {
    baseUrl = process.env.Vercel_URL;
  }
  const venues = await fetch(`${baseUrl}/api/venues`).then((res) => res.json());
  return {
    paths: venues.map((venue) => ({
      params: { id: venue.id.toString() }
    })),
    fallback: false
  };
}
