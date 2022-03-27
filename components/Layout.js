import Head from "next/head";
// import Footer from "components/Footer";
import Navbar from "./Navbar";

const title = "F1 Schedule";

export default function Layout({ children }) {
  return (
    <div className="bg-background-light dark:bg-background-dark flex flex-col min-h-screen ">
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar />
      <main className="flex-grow mx-4 sm:mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl">
        {children}
      </main>
      {/* <Footer /> */}
    </div>
  );
}
