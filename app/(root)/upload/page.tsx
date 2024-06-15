'use client'

import { avatar_01, avatar_02, avatar_03, avatar_04, avatar_05 } from '@/assets'
import Preview from '@/component/Preview'
import Image from 'next/image'
import { useState } from 'react'




const page = () => {

   const [content, setContent] = useState('')

   const handlePreview = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setContent(event.target.value);
   };

   return (
      <>
         {/* <!-- Content --> */}
         <div className="c6969 c9xin cr8w3 ci4j9 cr7br clwia cpqam c94qd c4a0m">

            {/* <!-- Middle area --> */}
            <div className="c4a0m">
               <div className="c8b8k">

                  {/* <!-- Back --> */}
                  <div className="cec5b">
                     <a className="cg3vi cj965 cry3b c81t6 cax03 c3iz2 chugl cz5kb c90wr" href="index-2.html">
                        <span className="c4g5b">Back</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34">
                           <path className="cjnrq"
                              d="m16.414 17 3.293 3.293-1.414 1.414L13.586 17l4.707-4.707 1.414 1.414z"></path>
                        </svg>
                     </a>
                  </div>

                  {/* <!-- PAGE HEADLINE --> */}
                  <article>
                     {/* <!-- Post header --> */}
                     <header>
                        <div className="cpk71 c5a0p c0kco cfwvb">
                           {/* <!-- Post date --> */}
                           <div className="c2bb0 cd99g ck5r6"><span className="chugl">—</span> Dec 24, 2023 <span
                              className="cxuy4 crnoq">·</span> 4 Min read</div>
                           {/* <!-- Share buttons --> */}
                           <ul className="cz5kb">
                              <li>
                                 <a className="cqs8k cpvt7 chlgd cfup8 crnoq c5a0p cofma chtu4 coi2g cfwvb" href="#0"
                                    aria-label="Twitter">
                                    <svg className="cjnrq csb9v c2298" viewBox="0 0 32 32"
                                       xmlns="http://www.w3.org/2000/svg">
                                       <path
                                          d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z">
                                       </path>
                                    </svg>
                                 </a>
                              </li>
                              <li>
                                 <a className="cqs8k cpvt7 chlgd cfup8 crnoq c5a0p cofma chtu4 coi2g cfwvb" href="#0"
                                    aria-label="Facebook">
                                    <svg className="cjnrq csb9v c2298" viewBox="0 0 32 32"
                                       xmlns="http://www.w3.org/2000/svg">
                                       <path
                                          d="M14.023 24 14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257Z">
                                       </path>
                                    </svg>
                                 </a>
                              </li>
                              <li>
                                 <a className="cqs8k cpvt7 chlgd cfup8 crnoq c5a0p cofma chtu4 coi2g cfwvb" href="#0"
                                    aria-label="Share">
                                    <svg className="cjnrq csb9v c2298" viewBox="0 0 32 32"
                                       xmlns="http://www.w3.org/2000/svg">
                                       <path
                                          d="M20 14c1.654 0 3-1.346 3-3s-1.346-3-3-3-3 1.346-3 3c0 .223.029.439.075.649l-3.22 2.012A2.97 2.97 0 0 0 12 13c-1.654 0-3 1.346-3 3s1.346 3 3 3a2.97 2.97 0 0 0 1.855-.661l3.22 2.012c-.046.21-.075.426-.075.649 0 1.654 1.346 3 3 3s3-1.346 3-3-1.346-3-3-3a2.97 2.97 0 0 0-1.855.661l-3.22-2.012c.046-.21.075-.426.075-.649 0-.223-.029-.439-.075-.649l3.22-2.012A2.97 2.97 0 0 0 20 14Z">
                                       </path>
                                    </svg>
                                 </a>
                              </li>
                           </ul>
                        </div>
                        <h1 className="cpynq cjd5a ciz93" style={{ marginBottom: "1.5rem" }}>Start typing your post.
                           Preview appears below</h1>
                     </header>
                  </article>

                  <Preview value={content} />
                  {/* 
                     <pre class="cgr7g c2bb0 ca9r6 cx6ng c9xwx cme8e cmy5q">
                        <code style="border-radius: 0.5rem">var str = "Hello world"
                           const greet = () => {console.log(str)}
                        </code>
                     </pre>
                  */}


                  <form style={{ display: 'block', width: '100%' }} id="content-form">
                     <input type="text" className="upload-author upload-title" placeholder="Enter Title" id="upload-title" />
                     <textarea name="" id="upload-area" className="upload-area" placeholder="start typing...."
                        onInput={handlePreview} value={content}></textarea>
                     <textarea typeof='text' className="upload-description" placeholder="Enter your description" id="upload-description"></textarea>
                     <input type="text" className="upload-author" placeholder="Enter author name" id="upload-author" />
                     <input type="file" alt="" className="upload-image" placeholder="Select an image" />
                     <button type="submit">
                        Upload Now
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                           className="bi bi-threads" viewBox="0 0 16 16">
                           <path
                              d="M6.321 6.016c-.27-.18-1.166-.802-1.166-.802.756-1.081 1.753-1.502 3.132-1.502.975 0 1.803.327 2.394.948s.928 1.509 1.005 2.644q.492.207.905.484c1.109.745 1.719 1.86 1.719 3.137 0 2.716-2.226 5.075-6.256 5.075C4.594 16 1 13.987 1 7.994 1 2.034 4.482 0 8.044 0 9.69 0 13.55.243 15 5.036l-1.36.353C12.516 1.974 10.163 1.43 8.006 1.43c-3.565 0-5.582 2.171-5.582 6.79 0 4.143 2.254 6.343 5.63 6.343 2.777 0 4.847-1.443 4.847-3.556 0-1.438-1.208-2.127-1.27-2.127-.236 1.234-.868 3.31-3.644 3.31-1.618 0-3.013-1.118-3.013-2.582 0-2.09 1.984-2.847 3.55-2.847.586 0 1.294.04 1.663.114 0-.637-.54-1.728-1.9-1.728-1.25 0-1.566.405-1.967.868ZM8.716 8.19c-2.04 0-2.304.87-2.304 1.416 0 .878 1.043 1.168 1.6 1.168 1.02 0 2.067-.282 2.232-2.423a6.2 6.2 0 0 0-1.528-.161" />
                        </svg>
                     </button>
                  </form>

               </div>
            </div>

            {/* <!-- Right sidebar --> */}
            <aside className="cd6k2 cf0x4 csb3e">

               <div className="c92wf">

                  {/* <!-- Newsletter widget --> */}
                  <div className="cg3vi cj965 cry3b c81t6 cax03 c1gvt czh94 czz51 c90wr c5oxi">
                     <div className="c41ht c0kco">
                        <div className="cz5kb c2e3l cmrd7">
                           <Image className="cg3vi c3iz2 crjg4 c6nlo cywxr" src={avatar_01} width="24"
                              height="24" alt="Avatar 01" />
                           <Image className="cg3vi c3iz2 crjg4 c6nlo cywxr" src={avatar_02} width="24"
                              height="24" alt="Avatar 02" />
                           <Image className="cg3vi c3iz2 crjg4 c6nlo cywxr" src={avatar_03} width="24"
                              height="24" alt="Avatar 03" />
                           <Image className="cg3vi c3iz2 crjg4 c6nlo cywxr" src={avatar_04} width="24"
                              height="24" alt="Avatar 04" />
                           <Image className="cg3vi c3iz2 crjg4 c6nlo cywxr" src={avatar_05} width="24"
                              height="24" alt="Avatar 05" />
                        </div>
                     </div>
                     <div className="c41ht cpl46">
                        <div className="cpynq c670g c0kco">Never miss an update!</div>
                        <p className="cxslc c2bb0 cme8e">Subscribe and join 100K+ developers.</p>
                     </div>
                     <form>
                        <div className="c4udf">
                           <label className="c4g5b" htmlFor="newsletter">Your email…</label>
                           <input id="newsletter" type="email" className="c899y c8pgj cfi31"
                              placeholder="Your email…" />
                        </div>
                        <button className="cwlj7 c0kjz czzu3 csfon c8pgj" type="submit">Subscribe</button>
                     </form>
                  </div>

                  {/* <!-- Sponsor widget --> */}
                  <div className="cg3vi cj965 cry3b c81t6 cax03 c1gvt czh94 czz51 c90wr c5oxi">
                     <div className="c5a0p ckgwf c4udf cfwvb">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="20">
                           <path fill="#38BDF8" fillRule="evenodd"
                              d="M.73 6.173a9.92 9.92 0 0 1 3.527-4.488A9.294 9.294 0 0 1 9.58 0h.737v4.67l.14-.226a9.68 9.68 0 0 1 4.3-3.683A9.205 9.205 0 0 1 20.29.192a9.461 9.461 0 0 1 4.904 2.737 10.143 10.143 0 0 1 2.622 5.12c.37 1.94.18 3.95-.545 5.778a9.92 9.92 0 0 1-3.528 4.488A9.294 9.294 0 0 1 18.42 20h-.737v-4.67a10.459 10.459 0 0 1-.14.226 9.68 9.68 0 0 1-4.3 3.683 9.205 9.205 0 0 1-5.534.569 9.461 9.461 0 0 1-4.904-2.737 10.143 10.143 0 0 1-2.622-5.12C-.186 10.01.004 8 .73 6.173ZM8.841 10V1.573a7.89 7.89 0 0 0-3.766 1.391A8.394 8.394 0 0 0 2.09 6.762a8.808 8.808 0 0 0-.462 4.889 8.583 8.583 0 0 0 2.219 4.332 8.006 8.006 0 0 0 4.15 2.316 7.789 7.789 0 0 0 4.683-.482 8.18 8.18 0 0 0 3.528-2.95 4.958 4.958 0 0 1-2.209.518c-2.849 0-5.158-2.411-5.158-5.385Zm10.316 8.427a7.89 7.89 0 0 0 3.766-1.391 8.393 8.393 0 0 0 2.985-3.798 8.807 8.807 0 0 0 .462-4.889 8.583 8.583 0 0 0-2.219-4.332 8.006 8.006 0 0 0-4.15-2.316 7.789 7.789 0 0 0-4.683.482 8.179 8.179 0 0 0-3.528 2.95A4.958 4.958 0 0 1 14 4.615c2.849 0 5.158 2.411 5.158 5.385v8.427Z">
                           </path>
                        </svg>
                        <span className="cpvt7 crnoq ck5r6">*Sponsor</span>
                     </div>
                     <div className="cpynq c670g c0kco">Build The Site You Want!</div>
                     <p className="cxslc c2bb0 cme8e">Your website should be an asset, not an engineering challenge.
                     </p>
                  </div>

                  {/* <!-- Popular Posts widget --> */}
                  <div className="cg3vi cj965 cry3b c81t6 cax03 c1gvt czh94 czz51 c90wr c5oxi">
                     <div className="cpynq c670g cec5b">Popular Posts</div>
                     <ul className="c3y7y">
                        <li className="cz5kb">
                           <span className="chugl cfxlx">—</span> <a
                              className="cfsb7 c2ers cofz6 cubqj cq25t cegle chlgd cdaqi c3ntq csd7h cdie3 c4ezg c8xm0 c6esp cpynq c670g cofma cz5kb c5c77 cn2yf cme8e"
                              href="post.html">Writing My First Security Blogpost</a>
                        </li>
                        <li className="cz5kb">
                           <span className="chugl cfxlx">—</span> <a
                              className="cfsb7 c2ers cofz6 cubqj cq25t cegle chlgd cdaqi c3ntq csd7h cdie3 c4ezg c8xm0 c6esp cpynq c670g cofma cz5kb c5c77 cn2yf cme8e"
                              href="post.html">JavaScript print Events</a>
                        </li>
                        <li className="cz5kb">
                           <span className="chugl cfxlx">—</span> <a
                              className="cfsb7 c2ers cofz6 cubqj cq25t cegle chlgd cdaqi c3ntq csd7h cdie3 c4ezg c8xm0 c6esp cpynq c670g cofma cz5kb c5c77 cn2yf cme8e"
                              href="post.html">How to Prototype with JavaScript</a>
                        </li>
                        <li className="cz5kb">
                           <span className="chugl cfxlx">—</span> <a
                              className="cfsb7 c2ers cofz6 cubqj cq25t cegle chlgd cdaqi c3ntq csd7h cdie3 c4ezg c8xm0 c6esp cpynq c670g cofma cz5kb c5c77 cn2yf cme8e"
                              href="post.html">Fuzzy Logic in a Hurry</a>
                        </li>
                        <li className="cz5kb">
                           <span className="chugl cfxlx">—</span> <a
                              className="cfsb7 c2ers cofz6 cubqj cq25t cegle chlgd cdaqi c3ntq csd7h cdie3 c4ezg c8xm0 c6esp cpynq c670g cofma cz5kb c5c77 cn2yf cme8e"
                              href="post.html">An Interactive Guide to Flexbox</a>
                        </li>
                     </ul>
                  </div>

               </div>

            </aside>

         </div>
      </>
   )
}

export default page
