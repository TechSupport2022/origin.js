import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import "../custom.css";
import SideNavigation from "@/component/SideNavigation";
import Header from "@/component/Header";
import Footer from "@/component/Footer";
import 'highlight.js/styles/default.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
   title: "Akanni.Js",
   description: "Next.js Portfolio",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <body className={`${inter.className} c81c8 coo5n ce3nz cg0ht cpw1o cngo2 c9mf7`}>

            <div className="cfbgr cpphc">
               <div className="ckb2r cfwvb">

                  <SideNavigation />

                  {/* <!-- Main content --> */}
                  <main className="c08dn c4a0m cajes">
                     <div className="csbbd c0bc4 cpphc cglmn c8pgj cfwvb">

                        <Header />

                        {children}


                        <Footer />

                     </div>

                  </main>

               </div>
            </div>

         </body>
      </html>
   );
}
