'use client'

import { avatar_01, avatar_02, avatar_03, avatar_04, avatar_05 } from '@/assets';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const Post = ({ params }: { params: { id: string } }) => {
   const [post, setPost]: any = useState(null);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      const fetchPost = async () => {
         if (params.id) {
            try {
               const response = await fetch(`/api/posts/${params.id}`);
               const data = await response.json();
               console.log("This is the data: ", data);
               setPost(data.data);
               setLoading(false);
            } catch (error) {
               console.error('Error fetching post:', error);
               setLoading(false);
            }
         }
      };

      fetchPost()
   }, [params.id])

   return (
      <div>
         Hello world this is the slug: {params.id} <br />
         This is the post :

         {/* <!-- Content --> */}
         <div className='c6969 c9xin cr8w3 ci4j9 cr7br clwia cpqam c94qd c4a0m'>

            {/* Middle area */}
            <div className='c4a0m'>
               <div className="c8b8k">

                  {/* {post?.content} */}
               </div>

               {/* <!-- Back --> */}
               <div className="cec5b">
                  <Link className="cg3vi cj965 cry3b c81t6 cax03 c3iz2 chugl cz5kb c90wr" href="/">
                     <span className="c4g5b">Back</span>
                     <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34">
                        <path className="cjnrq" d="m16.414 17 3.293 3.293-1.414 1.414L13.586 17l4.707-4.707 1.414 1.414z"></path>
                     </svg>
                  </Link>
               </div>

               <article>
                  {/* <!-- Post header --> */}
                  <header>
                     <div className="cpk71 c5a0p c0kco cfwvb">
                        {/* <!-- Post date --> */}
                        <div className="c2bb0 cd99g ck5r6"><span className="chugl">—</span> Dec 24, 2023 <span className="cxuy4 crnoq">·</span> 4 Min read</div>
                        {/* <!-- Share buttons --> */}
                        <ul className="cz5kb">
                           <li>
                              <a className="cqs8k cpvt7 chlgd cfup8 crnoq c5a0p cofma chtu4 coi2g cfwvb" href="#0" aria-label="Twitter">
                                 <svg className="cjnrq csb9v c2298" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                    <path d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z"></path>
                                 </svg>
                              </a>
                           </li>
                           <li>
                              <a className="cqs8k cpvt7 chlgd cfup8 crnoq c5a0p cofma chtu4 coi2g cfwvb" href="#0" aria-label="Facebook">
                                 <svg className="cjnrq csb9v c2298" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.023 24 14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257Z"></path>
                                 </svg>
                              </a>
                           </li>
                           <li>
                              <a className="cqs8k cpvt7 chlgd cfup8 crnoq c5a0p cofma chtu4 coi2g cfwvb" href="#0" aria-label="Share">
                                 <svg className="cjnrq csb9v c2298" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 14c1.654 0 3-1.346 3-3s-1.346-3-3-3-3 1.346-3 3c0 .223.029.439.075.649l-3.22 2.012A2.97 2.97 0 0 0 12 13c-1.654 0-3 1.346-3 3s1.346 3 3 3a2.97 2.97 0 0 0 1.855-.661l3.22 2.012c-.046.21-.075.426-.075.649 0 1.654 1.346 3 3 3s3-1.346 3-3-1.346-3-3-3a2.97 2.97 0 0 0-1.855.661l-3.22-2.012c.046-.21.075-.426.075-.649 0-.223-.029-.439-.075-.649l3.22-2.012A2.97 2.97 0 0 0 20 14Z"></path>
                                 </svg>
                              </a>
                           </li>
                        </ul>
                     </div>
                     <h1 className="cpynq cjd5a ciz93">{post?.title}</h1>
                  </header>
                  {/* Post Content */}
                  <div className=''>
                     <div dangerouslySetInnerHTML={{ __html: post?.content }} />
                  </div>
               </article>
            </div>

            {/* <!-- Right sidebar --> */}
            <aside className="cd6k2 cf0x4 csb3e">

               <div className="c92wf">

                  {/* <!-- Newsletter widget --> */}
                  <div className="cg3vi cj965 cry3b c81t6 cax03 c1gvt czh94 czz51 c90wr c5oxi">
                     <div className="c41ht c0kco">
                        <div className="cz5kb c2e3l cmrd7">
                           <Image className="cg3vi c3iz2 crjg4 c6nlo cywxr" src={avatar_01} width="24" height="24" alt="Avatar 01" />
                           <Image className="cg3vi c3iz2 crjg4 c6nlo cywxr" src={avatar_02} width="24" height="24" alt="Avatar 02" />
                           <Image className="cg3vi c3iz2 crjg4 c6nlo cywxr" src={avatar_03} width="24" height="24" alt="Avatar 03" />
                           <Image className="cg3vi c3iz2 crjg4 c6nlo cywxr" src={avatar_04} width="24" height="24" alt="Avatar 04" />
                           <Image className="cg3vi c3iz2 crjg4 c6nlo cywxr" src={avatar_05} width="24" height="24" alt="Avatar 05" />
                        </div>
                     </div>
                     <div className="c41ht cpl46">
                        <div className="cpynq c670g c0kco">Never miss an update!</div>
                        <p className="cxslc c2bb0 cme8e">Subscribe and join 100K+ developers.</p>
                     </div>
                     <form>
                        <div className="c4udf">
                           <label className="c4g5b" htmlFor="newsletter">Your email…</label>
                           <input id="newsletter" type="email" className="c899y c8pgj cfi31" placeholder="Your email…" />
                        </div>
                        <button className="cwlj7 c0kjz czzu3 csfon c8pgj" type="submit">Subscribe</button>
                     </form>
                  </div>

                  {/* <!-- Sponsor widget --> */}
                  <div className="cg3vi cj965 cry3b c81t6 cax03 c1gvt czh94 czz51 c90wr c5oxi">
                     <div className="c5a0p ckgwf c4udf cfwvb">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="20">
                           <path fill="#38BDF8" fill-rule="evenodd" d="M.73 6.173a9.92 9.92 0 0 1 3.527-4.488A9.294 9.294 0 0 1 9.58 0h.737v4.67l.14-.226a9.68 9.68 0 0 1 4.3-3.683A9.205 9.205 0 0 1 20.29.192a9.461 9.461 0 0 1 4.904 2.737 10.143 10.143 0 0 1 2.622 5.12c.37 1.94.18 3.95-.545 5.778a9.92 9.92 0 0 1-3.528 4.488A9.294 9.294 0 0 1 18.42 20h-.737v-4.67a10.459 10.459 0 0 1-.14.226 9.68 9.68 0 0 1-4.3 3.683 9.205 9.205 0 0 1-5.534.569 9.461 9.461 0 0 1-4.904-2.737 10.143 10.143 0 0 1-2.622-5.12C-.186 10.01.004 8 .73 6.173ZM8.841 10V1.573a7.89 7.89 0 0 0-3.766 1.391A8.394 8.394 0 0 0 2.09 6.762a8.808 8.808 0 0 0-.462 4.889 8.583 8.583 0 0 0 2.219 4.332 8.006 8.006 0 0 0 4.15 2.316 7.789 7.789 0 0 0 4.683-.482 8.18 8.18 0 0 0 3.528-2.95 4.958 4.958 0 0 1-2.209.518c-2.849 0-5.158-2.411-5.158-5.385Zm10.316 8.427a7.89 7.89 0 0 0 3.766-1.391 8.393 8.393 0 0 0 2.985-3.798 8.807 8.807 0 0 0 .462-4.889 8.583 8.583 0 0 0-2.219-4.332 8.006 8.006 0 0 0-4.15-2.316 7.789 7.789 0 0 0-4.683.482 8.179 8.179 0 0 0-3.528 2.95A4.958 4.958 0 0 1 14 4.615c2.849 0 5.158 2.411 5.158 5.385v8.427Z"></path>
                        </svg>
                        <span className="cpvt7 crnoq ck5r6">*Sponsor</span>
                     </div>
                     <div className="cpynq c670g c0kco">Build The Site You Want!</div>
                     <p className="cxslc c2bb0 cme8e">Your website should be an asset, not an engineering challenge.</p>
                  </div>

                  {/* <!-- Popular Posts widget --> */}
                  <div className="cg3vi cj965 cry3b c81t6 cax03 c1gvt czh94 czz51 c90wr c5oxi">
                     <div className="cpynq c670g cec5b">Popular Posts</div>
                     <ul className="c3y7y">
                        <li className="cz5kb">
                           <span className="chugl cfxlx">—</span> <a className="cfsb7 c2ers cofz6 cubqj cq25t cegle chlgd cdaqi c3ntq csd7h cdie3 c4ezg c8xm0 c6esp cpynq c670g cofma cz5kb c5c77 cn2yf cme8e" href="post.html">Writing My First Security Blogpost</a>
                        </li>
                        <li className="cz5kb">
                           <span className="chugl cfxlx">—</span> <a className="cfsb7 c2ers cofz6 cubqj cq25t cegle chlgd cdaqi c3ntq csd7h cdie3 c4ezg c8xm0 c6esp cpynq c670g cofma cz5kb c5c77 cn2yf cme8e" href="post.html">JavaScript print Events</a>
                        </li>
                        <li className="cz5kb">
                           <span className="chugl cfxlx">—</span> <a className="cfsb7 c2ers cofz6 cubqj cq25t cegle chlgd cdaqi c3ntq csd7h cdie3 c4ezg c8xm0 c6esp cpynq c670g cofma cz5kb c5c77 cn2yf cme8e" href="post.html">How to Prototype with JavaScript</a>
                        </li>
                        <li className="cz5kb">
                           <span className="chugl cfxlx">—</span> <a className="cfsb7 c2ers cofz6 cubqj cq25t cegle chlgd cdaqi c3ntq csd7h cdie3 c4ezg c8xm0 c6esp cpynq c670g cofma cz5kb c5c77 cn2yf cme8e" href="post.html">Fuzzy Logic in a Hurry</a>
                        </li>
                        <li className="cz5kb">
                           <span className="chugl cfxlx">—</span> <a className="cfsb7 c2ers cofz6 cubqj cq25t cegle chlgd cdaqi c3ntq csd7h cdie3 c4ezg c8xm0 c6esp cpynq c670g cofma cz5kb c5c77 cn2yf cme8e" href="post.html">An Interactive Guide to Flexbox</a>
                        </li>
                     </ul>
                  </div>

               </div>

            </aside>
         </div>
      </div>




   )

}

export default Post