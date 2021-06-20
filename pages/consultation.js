import Link from "next/link";
import ChatForm from "../components/consultation/ChatForm";

export default function Consultation() {
  return (
    <section className="relative py-16 bg-blueGray-200">
      <div className="text-center mt-12">
        <ChatForm />
      </div>
      <div className="justify-center text-center my-4">          
        <Link href="/consultations">
          <button className="py-8">           
            Voir les consultations du patient
          </button>
        </Link>
      </div>
    </section>
  );
}
