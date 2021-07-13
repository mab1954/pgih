export default function Acte({acte}){
    return <>
        <main>
            <h1>{acte.code}</h1>
            <p>{acte.libelle}</p>
        </main>
    </>
}

export async function getStaticProps ({params}) {
    const acte = await fetch(`http://localhost:3001/actes/${params.id}`)
    .then(response => response.json());
    return {
        props: {
            acte
        }
    };
}

export async function getStaticPaths(){
    const actes = await fetch('http://localhost:3001/actes')
    .then(response => response.json());
    return {
        paths: actes.map(acte => ({
            params: {id: acte.id.toString()}
        })),
        fallback: false,
    };
}