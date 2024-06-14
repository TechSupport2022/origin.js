'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'

const SideNavigation = () => {
   const currentClass = "cgla5 cjg8k cj6ii cfup8 cdxil csov4 c5a0p chugl c53su c5c77 c8pgj cfwvb cq87d"
   const oldClass = "c4ugg csbvt cpvt7 cfup8 crnoq c5a0p c8pgj cfwvb cq87d"
   
   const pathname = usePathname();
   
   return (
      <>

         {/* <!-- Side navigation --> */}
         <div className="cg3vi cax03 c5e9s cadmo cqmvi csb3e cxxfw c9cru c70js cfydh c5zj3">
            <div className="cpk71 co9go c9hv0 c0bc4 cglmn cfwvb">
               <div className="cew4t"></div>
               <div className="c5a0p cew4t cfwvb c4a0m">
                  <nav className="c8pgj">
                     <ul className="c9gi4">
                        <li className="cgktm" title='home'>
                           <Link className={`${pathname == "/" ? currentClass : oldClass}`}
                              href={`/`} >
                              <span className="c4g5b">Home</span>
                              <svg className="cjnrq" xmlns="http://www.w3.org/2000/svg" width="21" height="19">
                                 <path fillOpacity=".16" d="M4 7v11h13V7l-6.5-5z"></path>
                                 <path
                                    d="m10.433 3.242-8.837 6.56L.404 8.198l10.02-7.44L20.59 8.194l-1.18 1.614-8.977-6.565ZM16 17V9h2v10H3V9h2v8h11Z">
                                 </path>
                              </svg>
                           </Link>
                        </li>
                        <li className="cgktm" title='about'>
                           <Link className={`${pathname == "/about" ? currentClass : oldClass}`} href={`/about`}>
                              <span className="c4g5b">About</span>
                              <svg className="cjnrq" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                                 <path fillOpacity=".16"
                                    d="M10 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Z"></path>
                                 <path
                                    d="M9 5h2v2H9V5Zm0 4h2v6H9V9Zm1-9C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Z">
                                 </path>
                              </svg>
                           </Link>
                        </li>
                        <li className="cgktm" title='projects'>
                           <Link className={`${pathname == "/projects" ? currentClass : oldClass}`} href="/projects">
                              <span className="c4g5b">Projects</span>
                              <svg className="cjnrq" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                                 <path fillOpacity=".16" d="M1 4h18v10H1z"></path>
                                 <path d="M8 3h4V2H8v1ZM6 3V0h8v3h6v12H0V3h6ZM2 5v8h16V5H2Zm14 13v-2h2v4H2v-4h2v2h12Z">
                                 </path>
                              </svg>
                           </Link>
                        </li>
                        <li className="cgktm" title='resume'>
                           <Link className={`${pathname == "/resume" ? currentClass : oldClass}`} href={`/resume`}>
                              <span className="c4g5b">Resume</span>
                              <svg className="cjnrq" xmlns="http://www.w3.org/2000/svg" width="18" height="20">
                                 <path fillOpacity=".16" fillRule="nonzero" d="M1 5h16v14H1z"></path>
                                 <path fillRule="nonzero" d="M2 6v12h14V6H2Zm16-2v16H0V4h18ZM2 2V0h14v2H2Z"></path>
                              </svg>
                           </Link>
                        </li>
                        <li className="cgktm" title='subscribe'>
                           <Link className={`${pathname == "/subscribe" ? currentClass : oldClass}`} href={`/subscribe`}>
                              <span className="c4g5b">Subscribe</span>
                              <svg className="cjnrq" xmlns="http://www.w3.org/2000/svg" width="21" height="21">
                                 <path fillOpacity=".16" d="m13.4 18-3-7.4-7.4-3L19 2z"></path>
                                 <path
                                    d="M13.331 15.169 17.37 3.63 5.831 7.669l5.337 2.163 2.163 5.337Zm-3.699-3.801L.17 7.53 20.63.37l-7.161 20.461-3.837-9.463Z">
                                 </path>
                              </svg>
                           </Link>
                        </li>
                        <li className="cgktm" title='upload post'>
                           <Link className={`${pathname == "/upload" ? currentClass : oldClass}`} href={`/upload`}>
                              <span className="c4g5b">Subscribe</span>
                              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor"
                                 className="cjnrq bi bi-threads" viewBox="0 0 16 16">
                                 <path
                                    d="M6.321 6.016c-.27-.18-1.166-.802-1.166-.802.756-1.081 1.753-1.502 3.132-1.502.975 0 1.803.327 2.394.948s.928 1.509 1.005 2.644q.492.207.905.484c1.109.745 1.719 1.86 1.719 3.137 0 2.716-2.226 5.075-6.256 5.075C4.594 16 1 13.987 1 7.994 1 2.034 4.482 0 8.044 0 9.69 0 13.55.243 15 5.036l-1.36.353C12.516 1.974 10.163 1.43 8.006 1.43c-3.565 0-5.582 2.171-5.582 6.79 0 4.143 2.254 6.343 5.63 6.343 2.777 0 4.847-1.443 4.847-3.556 0-1.438-1.208-2.127-1.27-2.127-.236 1.234-.868 3.31-3.644 3.31-1.618 0-3.013-1.118-3.013-2.582 0-2.09 1.984-2.847 3.55-2.847.586 0 1.294.04 1.663.114 0-.637-.54-1.728-1.9-1.728-1.25 0-1.566.405-1.967.868ZM8.716 8.19c-2.04 0-2.304.87-2.304 1.416 0 .878 1.043 1.168 1.6 1.168 1.02 0 2.067-.282 2.232-2.423a6.2 6.2 0 0 0-1.528-.161" />
                              </svg>
                           </Link>
                        </li>
                     </ul>
                  </nav>
               </div>
            </div>
         </div>
      </>
   )
}

export default SideNavigation
function useEffect(arg0: () => void, arg1: any[]) {
   throw new Error('Function not implemented.')
}

