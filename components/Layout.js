import Head from "next/head";
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";

export default function Layout({ page }) {
  return (
    <div className="leading-normal tracking-normal text-white bg-gradient-to-r from-blue-700 to-green-500">
      <Head>
        <title>{page}</title>
      </Head>
      <Header />
      <Home/>
      <Footer />
    </div>
  );
}
