import { avatar_01, avatar_02, avatar_03, avatar_04, avatar_05 } from '@/assets'
import Experience from '@/component/Experience'
import Image from 'next/image'
import React from 'react'

const page = () => {
   return (
      <>
         {/* <!-- Main content --> */}
         <main className="c4a0m c08dn cajes">
            <div className="cpphc cfwvb cglmn c8pgj csbbd c0bc4">

               {/* <!-- Content --> */}
               <div className="c4a0m cr8w3 cpqam c94qd clwia c6969 c9xin ci4j9 cr7br">

                  {/* <!-- Middle area --> */}
                  <div className="c4a0m">
                     <div className="c8b8k">

                        <section>
                           {/* <!-- Page title --> */}
                           <h1 className="ciz93 cme53 cpynq">Hi. I'm <span className="c5c77 cz5kb chugl c4ezg c8xm0 c6esp cfsb7 csd7h cdaqi c3ntq cofz6">@the_tech_lead</span> 🤟</h1>

                           {/* <!-- Large Banner Image --> */}
                           {/* <!-- Disabled for now, Add Later --> */}
                           {/* <!-- <Image className="c8pgj" src="images/about.png" width="692" height="390" alt="About"> --> */}
                           {/* <!-- Page content --> */}
                           <div className="cr8w3 c2bb0 cxslc">
                              <div className="c9gi4">
                                 <h2 className="cjvvo cpynq cg0ht cxmc9">Short Bio</h2>
                                 <p>
                                    I'm a software engineer with more than 5 years of experience in a variety of domains.
                                 </p>
                                 <p>
                                    For the past few years, I've focused on fullstack server-side projects, native applications, and platform development - tinkering with infrastructure, all things Engineering and Microservices.
                                 </p>
                                 <p>
                                    While there isn't a Wikipedia page about me (sorry folks!), a media bio is available below.
                                 </p>
                              </div>
                              <div className="c9gi4">
                                 <h2 className="cjvvo cpynq cg0ht cxmc9">Career</h2>
                                 {/* <p>
                                    As CTO of AppForYou, <strong className="cnp10 cg0ht cxmc9">I am responsible for leading</strong> the technical team and developing the company's technology strategy. I work closely with the engineering team to ensure that the products and services we provide are secure.
                                 </p> */}
                                 <p>
                                    My work involves developing and testing new features, optimizing performance and security, and ensuring our customer's websites and applications works for users around the world. I also work closely with  <a className="cnp10 chugl cm6cq" href="#">External API's</a> to ensure products are well-integrated with external gateways and services.
                                 </p>
                                 <p>
                                    In my role as The Techlead at MiT, I am responsible for developing and maintaining student learning curriculum, Web Architecture and overall Dev. experience of MiT Inc. <a className="cnp10 chugl cm6cq" href="#"> MiT Inc.</a>.
                                 </p>
                              </div>


                              {/* Experience Timeline */}
                              <Experience title="Experience" />


                              <div className="c9gi4">
                                 <h2 className="cjvvo cpynq cg0ht cxmc9">Let's Connect</h2>
                                 <p>
                                    I'm excited to connect with others via <a className="cnp10 chugl cm6cq" href="mailto:sendaraven2@gmail.com" target="_blank">email</a> and <a className="cnp10 chugl cm6cq" href="https://twitter.com/The_Tech_lead">Twitter</a> to chat about projects and ideas. Currently, I'm not taking on freelance projects, but I am open to hearing about potential opportunities, discussing them with you and then potentially collaborating if it's a good fit.
                                 </p>
                              </div>
                           </div>
                        </section>

                     </div>
                  </div>

                  {/* <!-- Right sidebar --> */}
                  <aside className="csb3e cd6k2 cf0x4">

                     <div className="c92wf">

                        {/* <!-- Newsletter widget --> */}
                        <div className="czz51 c90wr cax03 c5oxi czh94 c1gvt cg3vi cj965 c81t6 cry3b">
                           <div className="c0kco c41ht">
                              <div className="cmrd7 cz5kb c2e3l">
                                 <Image className="c6nlo c3iz2 cywxr crjg4 cg3vi" src={avatar_01} width="24" height="24" alt="Avatar 01" />
                                 <Image className="c6nlo c3iz2 cywxr crjg4 cg3vi" src={avatar_02} width="24" height="24" alt="Avatar 02" />
                                 <Image className="c6nlo c3iz2 cywxr crjg4 cg3vi" src={avatar_03} width="24" height="24" alt="Avatar 03" />
                                 <Image className="c6nlo c3iz2 cywxr crjg4 cg3vi" src={avatar_04} width="24" height="24" alt="Avatar 04" />
                                 <Image className="c6nlo c3iz2 cywxr crjg4 cg3vi" src={avatar_05} width="24" height="24" alt="Avatar 05" />
                              </div>
                           </div>
                           <div className="cpl46 c41ht">
                              <div className="c0kco cpynq c670g">Never miss an update!</div>
                              <p className="cme8e c2bb0 cxslc">Subscribe and join 100K+ developers.</p>
                           </div>
                           <form>
                              <div className="c4udf">
                                 <label className="c4g5b" htmlFor="newsletter">Your email…</label>
                                 <input id="newsletter" type="email" className="c899y c8pgj cfi31" placeholder="Your email…" />
                              </div>
                              <button className="csfon c8pgj czzu3 c0kjz cwlj7" type="submit">Subscribe</button>
                           </form>
                        </div>

                        {/* <!-- Sponsor widget --> */}
                        <div className="czz51 c90wr cax03 c5oxi czh94 c1gvt cg3vi cj965 c81t6 cry3b">
                           <div className="c4udf cfwvb c5a0p ckgwf">
                              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="20">
                                 <path fill="#38BDF8" fill-rule="evenodd" d="M.73 6.173a9.92 9.92 0 0 1 3.527-4.488A9.294 9.294 0 0 1 9.58 0h.737v4.67l.14-.226a9.68 9.68 0 0 1 4.3-3.683A9.205 9.205 0 0 1 20.29.192a9.461 9.461 0 0 1 4.904 2.737 10.143 10.143 0 0 1 2.622 5.12c.37 1.94.18 3.95-.545 5.778a9.92 9.92 0 0 1-3.528 4.488A9.294 9.294 0 0 1 18.42 20h-.737v-4.67a10.459 10.459 0 0 1-.14.226 9.68 9.68 0 0 1-4.3 3.683 9.205 9.205 0 0 1-5.534.569 9.461 9.461 0 0 1-4.904-2.737 10.143 10.143 0 0 1-2.622-5.12C-.186 10.01.004 8 .73 6.173ZM8.841 10V1.573a7.89 7.89 0 0 0-3.766 1.391A8.394 8.394 0 0 0 2.09 6.762a8.808 8.808 0 0 0-.462 4.889 8.583 8.583 0 0 0 2.219 4.332 8.006 8.006 0 0 0 4.15 2.316 7.789 7.789 0 0 0 4.683-.482 8.18 8.18 0 0 0 3.528-2.95 4.958 4.958 0 0 1-2.209.518c-2.849 0-5.158-2.411-5.158-5.385Zm10.316 8.427a7.89 7.89 0 0 0 3.766-1.391 8.393 8.393 0 0 0 2.985-3.798 8.807 8.807 0 0 0 .462-4.889 8.583 8.583 0 0 0-2.219-4.332 8.006 8.006 0 0 0-4.15-2.316 7.789 7.789 0 0 0-4.683.482 8.179 8.179 0 0 0-3.528 2.95A4.958 4.958 0 0 1 14 4.615c2.849 0 5.158 2.411 5.158 5.385v8.427Z"></path>
                              </svg>
                              <span className="ck5r6 crnoq cpvt7">*Sponsor</span>
                           </div>
                           <div className="c0kco cpynq c670g">Build The Site You Want!</div>
                           <p className="cme8e c2bb0 cxslc">Your website should be an asset, not an engineering challenge.</p>
                        </div>

                     </div>

                  </aside>

               </div>

               {/* <!-- Footer --> */}

            </div>
         </main>
      </>
   )
}

export default page
