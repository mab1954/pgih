import Link from "next/link";
import ChatForm from "../components/consultation/ChatForm";

export default function Consultation() {
  return (
    <section className="relative py-16 bg-blueGray-200 justify-center text-center my-4">
      <Link href="/dashboard">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Retour vers le Dashboard</button>
      </Link>
      <div className="text-center mt-6">
        <ChatForm />
      </div>
    </section>
  );
}
