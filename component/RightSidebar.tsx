import { avatar_icon_01, avatar_icon_02, avatar_icon_03, avatar_icon_04, avatar_icon_05, book } from '@/assets'
import Image from 'next/image'
import React from 'react'

const RightSideba = () => {
   return (
      <>
         {/*  <!-- Right sidebar --> */}
         <aside className="cd6k2 cf0x4 csb3e">
            <div className="c92wf">
               {/* <!-- Newsletter widget --> */}
               <div className="cg3vi cj965 cry3b c81t6 cax03 c1gvt czh94 czz51 c90wr c5oxi">
                  <div className="c41ht c0kco">
                     <div className="cz5kb c2e3l cmrd7">
                        <Image className="cg3vi c3iz2 crjg4 c6nlo cywxr" src={avatar_icon_01} width="24" height="24" alt="Avatar 01" />
                        <Image className="cg3vi c3iz2 crjg4 c6nlo cywxr" src={avatar_icon_02} width="24" height="24" alt="Avatar 02" />
                        <Image className="cg3vi c3iz2 crjg4 c6nlo cywxr" src={avatar_icon_03} width="24" height="24" alt="Avatar 03" />
                        <Image className="cg3vi c3iz2 crjg4 c6nlo cywxr" src={avatar_icon_04} width="24" height="24" alt="Avatar 04" />
                        <Image className="cg3vi c3iz2 crjg4 c6nlo cywxr" src={avatar_icon_05} width="24" height="24" alt="Avatar 05" />
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
               </div> {/* <!-- Sponsor widget --> */}
               <div className="cg3vi cj965 cry3b c81t6 cax03 c1gvt czh94 czz51 c90wr c5oxi">
                  <div className="c5a0p ckgwf c4udf cfwvb">
                     <svg xmlns="http://www.w3.org/2000/svg" width="28" height="20">
                        <path fill="#38BDF8" fillRule="evenodd" d="M.73 6.173a9.92 9.92 0 0 1 3.527-4.488A9.294 9.294 0 0 1 9.58 0h.737v4.67l.14-.226a9.68 9.68 0 0 1 4.3-3.683A9.205 9.205 0 0 1 20.29.192a9.461 9.461 0 0 1 4.904 2.737 10.143 10.143 0 0 1 2.622 5.12c.37 1.94.18 3.95-.545 5.778a9.92 9.92 0 0 1-3.528 4.488A9.294 9.294 0 0 1 18.42 20h-.737v-4.67a10.459 10.459 0 0 1-.14.226 9.68 9.68 0 0 1-4.3 3.683 9.205 9.205 0 0 1-5.534.569 9.461 9.461 0 0 1-4.904-2.737 10.143 10.143 0 0 1-2.622-5.12C-.186 10.01.004 8 .73 6.173ZM8.841 10V1.573a7.89 7.89 0 0 0-3.766 1.391A8.394 8.394 0 0 0 2.09 6.762a8.808 8.808 0 0 0-.462 4.889 8.583 8.583 0 0 0 2.219 4.332 8.006 8.006 0 0 0 4.15 2.316 7.789 7.789 0 0 0 4.683-.482 8.18 8.18 0 0 0 3.528-2.95 4.958 4.958 0 0 1-2.209.518c-2.849 0-5.158-2.411-5.158-5.385Zm10.316 8.427a7.89 7.89 0 0 0 3.766-1.391 8.393 8.393 0 0 0 2.985-3.798 8.807 8.807 0 0 0 .462-4.889 8.583 8.583 0 0 0-2.219-4.332 8.006 8.006 0 0 0-4.15-2.316 7.789 7.789 0 0 0-4.683.482 8.179 8.179 0 0 0-3.528 2.95A4.958 4.958 0 0 1 14 4.615c2.849 0 5.158 2.411 5.158 5.385v8.427Z"></path>
                     </svg>
                     <span className="cpvt7 crnoq ck5r6">*Sponsor</span>
                  </div>
                  <div className="cpynq c670g c0kco">Build The Site You Want!</div>
                  <p className="cxslc c2bb0 cme8e">Your website should be an asset, not an engineering challenge. </p>
               </div>
               {/* <!-- E-Book widget --> */}
               <div className="cg3vi cj965 cry3b c81t6 cax03 c1gvt czh94 czz51 c90wr c5oxi">
                  <div className="cpynq c670g c41ht cec5b">Free E-Book</div>
                  <div className="c41ht">
                     <Image className="cz5kb czz51 c46gp cpe17" src={book} width="148" height="190" alt="Book" />
                  </div>
               </div>
            </div>
         </aside>
      </>
   )
}

export default RightSideba
