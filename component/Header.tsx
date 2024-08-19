'use client'

import React, { InputHTMLAttributes, useEffect, useState } from 'react'

const Header = () => {

   const [isDarkMode, setIsDarkMode] = useState(true);
   // const [isDarkMode, setIsDarkMode] = useState(
   //    typeof window !== 'undefined' && localStorage.getItem('dark-mode') === 'true'
   // );

   useEffect(() => {
      // Update the dark mode class on the document element
      if (isDarkMode) {
         document.documentElement.classList.add('dark');
         localStorage.setItem('dark-mode', 'true');
      } else {
         document.documentElement.classList.remove('dark');
         localStorage.setItem('dark-mode', 'false');
      }
   }, [isDarkMode]);

   const handleToggle = () => {
      setIsDarkMode(!isDarkMode);
   }

   // useEffect(() => {
   //    // Light switcher
   //    const lightSwitches: NodeListOf<any> = document.querySelectorAll('.light-switch');
   //    if (lightSwitches.length > 0) {
   //       lightSwitches.forEach((lightSwitch, i) => {
   //          if (localStorage.getItem('dark-mode') === 'true') {
   //             // eslint-disable-next-line no-param-reassign
   //             lightSwitch.checked = true;
   //          }
   //          lightSwitch.addEventListener('change', () => {
   //             const { checked } = lightSwitch;
   //             lightSwitches.forEach((el, n) => {
   //                if (n !== i) {
   //                   // eslint-disable-next-line no-param-reassign
   //                   el.checked = checked;
   //                }
   //             });
   //             if (lightSwitch.checked) {
   //                document.documentElement.classList.add('dark');
   //                localStorage.setItem('dark-mode', 'true');
   //             } else {
   //                document.documentElement.classList.remove('dark');
   //                localStorage.setItem('dark-mode', 'false');
   //             }
   //          });
   //       });
   //    }
   // })

   return (
      <>
         {/* <!-- Header --> */}
         <header>
            <div className="cpk71 cdxms c5a0p cfwvb co6sp">

               <div className="creo2 ckjll cfwvb c4a0m">

                  {/* <!-- Search form --> */}
                  <form className="cm8gy c8pgj">
                     <div className="cnxqt cfwvb">
                        <div className="c8pgj">
                           <label className="c4g5b cme8e chipd" htmlFor="search">Search</label>
                           <div className="c5a0p c5c77 cfwvb">
                              <input id="search" type="search" className="c899y c8pgj cw009 cfi31" />
                              <div className="cfup8 c5a0p cqn5a chzqd c5u91 cfwvb">
                                 <svg className="csb3e c0vrt cjhbj cu9sk" viewBox="0 0 16 16"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path className="cwnoo"
                                       d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5zm8.707 12.293a.999.999 0 11-1.414 1.414L11.9 13.314a8.019 8.019 0 001.414-1.414l2.393 2.393z">
                                    </path>
                                 </svg>
                              </div>
                           </div>
                        </div>
                     </div>
                  </form>

                  {/* <!-- Light switch --> */}
                  <div className="cfup8 c0bc4 c8r41 cfwvb">
                     <input type="checkbox" name="light-switch" id="light-switch" className="light-switch c4g5b" checked={isDarkMode} onChange={handleToggle} />
                     <label className="cgfjk c5c77 c94ja" htmlFor="light-switch">
                        <svg className="cxg5x" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                           <path className="c40us"
                              d="M7 0h2v2H7zM12.88 1.637l1.414 1.415-1.415 1.413-1.413-1.414zM14 7h2v2h-2zM12.95 14.433l-1.414-1.413 1.413-1.415 1.415 1.414zM7 14h2v2H7zM2.98 14.364l-1.413-1.415 1.414-1.414 1.414 1.415zM0 7h2v2H0zM3.05 1.706 4.463 3.12 3.05 4.535 1.636 3.12z">
                           </path>
                           <path className="cwnoo" d="M8 4C5.8 4 4 5.8 4 8s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4Z"></path>
                        </svg>
                        <svg className="c2f3p cw2lf" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                           <path className="cwnoo"
                              d="M6.2 1C3.2 1.8 1 4.6 1 7.9 1 11.8 4.2 15 8.1 15c3.3 0 6-2.2 6.9-5.2C9.7 11.2 4.8 6.3 6.2 1Z">
                           </path>
                           <path className="c4foe"
                              d="M12.5 5a.625.625 0 0 1-.625-.625 1.252 1.252 0 0 0-1.25-1.25.625.625 0 1 1 0-1.25 1.252 1.252 0 0 0 1.25-1.25.625.625 0 1 1 1.25 0c.001.69.56 1.249 1.25 1.25a.625.625 0 1 1 0 1.25c-.69.001-1.249.56-1.25 1.25A.625.625 0 0 1 12.5 5Z">
                           </path>
                        </svg>
                        <span className="c4g5b">Switch to light / dark version</span>
                     </label>
                  </div>

                  {/* <!-- Button --> */}
                  <div>
                     <a className="cwlj7 c0kjz czzu3 csfon" href="subscribe.html">Subscribe</a>
                  </div>

               </div>

            </div>
         </header>
      </>
   )
}

export default Header
