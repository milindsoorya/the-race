import Head from "next/head";

import Navbar from "../components/Navbar";
// import Footer from "components/Footer";

export default function Container(props) {
  const { children, ...customMeta } = props;
  const meta = {
    title: "F1 Schedule",
    description: ``,
    type: "website",
    ...customMeta,
  };

  return (
    <div className="container px-6 w-full max-w-full h-full bg-gray-900">
      <Head>
        <title>{meta.title}</title>
      </Head>
      <Navbar />
      <main
        id="skip"
        className="mt-8 flex flex-col justify-center items-center md:px-8 bg-background-light dark:bg-background-dark"
      >
        {children}
      </main>
      {/* <Footer /> */}
    </div>
  );
}
