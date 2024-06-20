'use client'

import React from 'react'

import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Spinner from './Spinner';


const Layout = ({ children }: { children: React.ReactNode }) => {
   const router = useRouter();
   const pathname = usePathname();
   const [loading, setLoading] = useState(false);

   useEffect(() => {
      setLoading(true);

      // Simulate a delay to show the spinner (optional)
      const timeoutId = setTimeout(() => {
         setLoading(false);
      }, 500); // Adjust the delay as needed

      return () => clearTimeout(timeoutId);
   }, [pathname]);


   return (
      <>
         {loading && (
            <div className="page-spinner">
               <div className="spinner-inner">
                  <Spinner loading={loading} />
               </div>
            </div>
         )}
         {children}
      </>
   )
}

export default Layout
