'use client'


import Image from "next/image";

import { me, me2, popular_post_01, popular_post_02, post_thumb_01, project_icon_01, project_icon_02 } from "@/assets"
import RightSidebar from "@/component/RightSidebar";
import { useEffect, useState } from "react";

export default function Home() {
   const activeClass = 'cxmc9 cgygf cg0ht cnp10 ch63g chipd cen0e tab-head active';
   const oldClass = 'cts6h cb9ru cxslc c2bb0 chipd cen0e tab-head';

   const [activeTab, setActiveTab] = useState<string>('all');

   const handleToggleTab = (tabID: string) => {
      setActiveTab(tabID)
   }


   useEffect(() => {
      setActiveTab(activeTab);
   }, [activeTab])
   return (
      <>

         {/* <!-- Main content --> */}
         {/* <main className="c08dn c4a0m cajes">
            <div className="csbbd c0bc4 cpphc cglmn c8pgj cfwvb"> */}

         {/* <!-- Hero --> */}
         <section>
            <div className="c8b8k">
               <div className="c2r2p c7sw6">
                  <div className="me2-div">
                     <Image className="c3iz2 cme53 me2-img" src={me2} width="86" height="86" alt="me2" />
                  </div>
                  <h1 className="cpynq cme53 ciz93">I write about coding and being a <span className="cfsb7 cofz6 cdaqi c3ntq csd7h c4ezg c8xm0 c6esp chugl cz5kb c5c77">full-time</span> maker. </h1>
                  <p className="cxslc c2bb0 c5rvt">Writer, Speaker, Developer, and Co-Founder of Code.co, and AppForYou. I write about coding, startups, and my journey as a full-time maker.</p>
               </div>
            </div>
         </section>
         {/* <!-- Content --> */}
         <div className="c6969 c9xin cr8w3 ci4j9 clwia cpqam c4a0m">
            {/* <!-- Middle area --> */}
            <div className="c4a0m">
               <div className="c8b8k">
                  <div className="c7qcc">
                     {/* <!-- Latest Articles --> */}
                     <section>
                        <h2 className="cpynq c670g c8dzi cec5b">Latest Articles</h2>
                        {/* <!-- Filters --> */}
                        <ul className="cg3vi crdpf cnxqt c8z7y cme8e cfwvb">
                           <li className="cz4pw c59mu">
                              <a className={`${activeTab == 'all' ? activeClass : oldClass} tab-head`} id="all" href="#" onClick={() => handleToggleTab('all')}>All</a>
                           </li>
                           <li className="cz4pw c59mu">
                              <a className={`${activeTab == 'coding' ? activeClass : oldClass} tab-head`} id="coding" href="#" onClick={() => handleToggleTab('coding')}>Coding</a>
                           </li>
                           <li className="cz4pw c59mu">
                              <a className={`${activeTab == 'tutorial' ? activeClass : oldClass} tab-head`} id="tutorial" href="#" onClick={() => handleToggleTab('tutorial')}>Tutorials</a>
                           </li>
                           <li className="cz4pw c59mu">
                              <a className={`${activeTab == 'indie' ? activeClass : oldClass} tab-head`} id="indie" href="#" onClick={() => handleToggleTab('indie')}>Indie Hacking</a>
                           </li>
                        </ul>
                        {/* <!-- Articles list --> */}
                        <div> </div>



                        {/* image: post_thumb_01 */}
                        <div id="tab-body">
                           {[{ id: 'coding', img: me2 }, { id: 'tutorial', img: me }, { id: 'indie', img: me }].map((article, index) => {
                              return (
                                 <article key={index} className={`${!activeTab.indexOf(article.id) || !activeTab.indexOf('all') ? 'cg3vi crdpf c8z7y c3bdg' : 'd-none'}`} id="all coding">
                                    <div className="c9noy cfwvb">
                                       <Image className="c906c cr6xl c8c2x c9xwx ccj8i co6sp c5zj3 bg-blue" src={article.img} width="88" height="88" alt="Post 01" />
                                       <div>
                                          <div className="c2bb0 cd99g ck5r6 c0kco" id="post-date">
                                             <span className="chugl">—</span>
                                          </div>
                                          <h3 className="cpynq c670g c5rvt c0kco">
                                             <a className="cfsb7 c2ers cofz6 cubqj cq25t cegle chlgd cdaqi c3ntq csd7h cdie3 c4ezg c8xm0 c6esp cofma cz5kb c5c77 cn2yf" href="post.html" id="post-title">An Interactive Guide to Flexbox</a>
                                          </h3>
                                          <div className="cfwvb">
                                             <div className="cxslc c2bb0 cme8e c4a0m" id="post-description"> Flexbox is a remarkably flexible layout mode. When we understand how it works, we can build responsive designs that rearrange themselves as needed. </div>
                                             <a className="cfup8 c5a0p chugl csb3e c86uy cw2lf cpnf3 cgej2" href="post.html" tabIndex={-1}>
                                                <svg className="cqlhq cjnrq cofma chtu4" xmlns="http://www.w3.org/2000/svg" width="14" height="12">
                                                   <path d="M9.586 5 6.293 1.707 7.707.293 13.414 6l-5.707 5.707-1.414-1.414L9.586 7H0V5h9.586Z"></path>
                                                </svg>
                                             </a>
                                          </div>
                                       </div>
                                    </div>
                                 </article>
                              )
                           })}

                        </div>
                     </section>
                     {/* <!-- Popular Talks --> */}
                     <section>
                        <h2 className="cpynq c670g c8dzi cme53">Popular Talks</h2>
                        {/* <!-- Cards --> */}
                        <div className="c2bf0 cuyx0 ci65n cgdgh ceazt">
                           <a className="ck1rl cegol cth4i c08dn c1gvt c6iwv c9ic7 czh94 crprk cpa9f c9alu chtu4 czz51 cjci4 c5c77" href="#">
                              <Image className="c8c2x c8bmc chzqd c5u91 cglmn c8pgj" src={popular_post_01} width="336" height="189" alt="Popular post 01" />
                              <div className="cpk71 cf0v5 c736y c9noy c5c77 c0bc4 cglmn cfwvb c5oxi">
                                 <div className="c5a0p cpynq c670g craoz c5rvt cew4t cfwvb">The Third Age of JavaScript</div>
                                 <div className="creo2 cldiu c8pgj cew4t cfwvb">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41">
                                       <circle className="crdeu" cx="20" cy="20" r="20" fillOpacity=".88"></circle>
                                       <path className="c22wf" d="m24.765 19.5-6.263-4.375a.626.626 0 0 0-1.002.5v8.75c0 .5.564.812 1.002.5l6.263-4.375a.65.65 0 0 0 0-1Z"></path>
                                    </svg>
                                 </div>
                              </div>
                           </a>
                           <a className="ck1rl cegol cth4i c08dn c1gvt c6iwv c9ic7 czh94 crprk cpa9f c9alu chtu4 czz51 cjci4 c5c77" href="#">
                              <Image className="c8c2x c8bmc chzqd c5u91 cglmn c8pgj" src={popular_post_02} width="336" height="189" alt="Popular post 02" />
                              <div className="cpk71 cf0v5 c736y c9noy c5c77 c0bc4 cglmn cfwvb c5oxi">
                                 <div className="c5a0p cpynq c670g craoz c5rvt cew4t cfwvb">Building in Public Strategy</div>
                                 <div className="creo2 cldiu c8pgj cew4t cfwvb">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41">
                                       <circle className="crdeu" cx="20" cy="20" r="20" fillOpacity=".88"></circle>
                                       <path className="c22wf" d="m24.765 19.5-6.263-4.375a.626.626 0 0 0-1.002.5v8.75c0 .5.564.812 1.002.5l6.263-4.375a.65.65 0 0 0 0-1Z"></path>
                                    </svg>
                                 </div>
                              </div>
                           </a>
                        </div>
                     </section>
                     {/* <!-- Open-Source Projects --> */}
                     <section>
                        <h2 className="cpynq c670g c8dzi cme53">Open-Source Projects</h2>
                        {/* <!-- Cards --> */}
                        <div className="c2bf0 cuyx0 ci65n cgdgh ceazt">
                           <a className="cg3vi cj965 cry3b ck1rl c81t6 cegol cax03 c6iwv cof6c c9o2h c9alu chtu4 czz51 c90wr c5oxi" href="https://github.com/Harkanni/Javascript-design-patterns">
                              <div className="c0bc4 cglmn cfwvb">
                                 <div className="c4a0m">
                                    <div className="ce7gc cax03 cfup8 c5a0p c3iz2 c90wr c4udf cfwvb c924u cvlm4">
                                       <Image src={project_icon_01} width="18" height="18" alt="Project 01" />
                                    </div>
                                    <div className="cpynq c670g c5rvt c0kco">Javascript Design Patterns</div>
                                    <p className="cxslc c2bb0 cme8e c4udf">Proven solutions for structuring JavaScript code, both in local development environments.</p>
                                 </div>
                                 <div className="chugl creo2 cfwvb">
                                    <svg className="cjnrq" xmlns="http://www.w3.org/2000/svg" width="14" height="12">
                                       <path d="M9.586 5 6.293 1.707 7.707.293 13.414 6l-5.707 5.707-1.414-1.414L9.586 7H0V5h9.586Z"></path>
                                    </svg>
                                 </div>
                              </div>
                           </a>
                           <a className="cg3vi cj965 cry3b ck1rl c81t6 cegol cax03 c6iwv cof6c c9o2h c9alu chtu4 czz51 c90wr c5oxi" href="https://github.com/Harkanni/jackpot-login">
                              <div className="c0bc4 cglmn cfwvb">
                                 <div className="c4a0m">
                                    <div className="ce7gc cax03 cfup8 c5a0p c3iz2 c90wr c4udf cfwvb c924u cvlm4">
                                       <Image src={project_icon_02} width="18" height="18" alt="Project 02" />
                                    </div>
                                    <div className="cpynq c670g c5rvt c0kco">Jackpot Login System</div>
                                    <p className="cxslc c2bb0 cme8e c4udf">Card-based authentication and session management for secure access..</p>
                                 </div>
                                 <div className="chugl creo2 cfwvb">
                                    <svg className="cjnrq" xmlns="http://www.w3.org/2000/svg" width="14" height="12">
                                       <path d="M9.586 5 6.293 1.707 7.707.293 13.414 6l-5.707 5.707-1.414-1.414L9.586 7H0V5h9.586Z"></path>
                                    </svg>
                                 </div>
                              </div>
                           </a>
                        </div>
                     </section>
                  </div>
               </div>
            </div>

            <RightSidebar />
         </div>
         {/* </div>
         </main> */}
      </>
   )
}
