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
  const venue = await fetch(
    `http://localhost:3001/venues/${params.id}`
  ).then((response) => response.json());
  return {
    props: {
      venue,
    },
  };
}

export async function getStaticPaths() {
  const venues = await fetch("http://localhost:3001/venues").then((response) =>
    response.json()
  );
  return {
    paths: venues.map((venue) => ({
      params: { id: venue.id.toString() },
    })),
    fallback: false,
  };
}
