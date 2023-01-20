import Head from "next/head";
import Header from "../Header.js";
import Footer from "../Footer.js";
/**
 |--------------------------------------------------------------------------
 | Export default React Component
 |----------------------------------------------------------------------- */


export default function AppLayout({ title, description, children }) {
  return (
    <>
      <Head>
        <title>{title}</title>
         <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
       <main className="flex flex-column">
         <Header />
         {children}
         <Footer/>
       </main>
    
    </>
  );
}
