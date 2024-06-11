import { education_icon_01, education_icon_02, education_icon_03, reference_01, reference_02, testimonial_03, testimonial_04 } from '@/assets'
import Experience from '@/component/Experience'
import LanguageWidget from '@/component/LanguageWidget'
import ReferencesWidget from '@/component/ReferencesWidget'
import TechnicalWidget from '@/component/TechnicalWidget'
import Image from 'next/image'
import React from 'react'

const page = () => {
   return (
      <>
         {/* <!-- Main content --> */}
         <main className="c08dn c4a0m cajes">
            <div className="csbbd c0bc4 cpphc cglmn c8pgj cfwvb">

               {/* <!-- Header --> */}

               {/* <!-- Content --> */}
               <div className="c6969 c9xin cr8w3 ci4j9 cr7br clwia cpqam c94qd c4a0m">

                  {/* <!-- Middle area --> */}
                  <div className="c4a0m">
                     <div className="c8b8k">

                        <section>
                           {/* <!-- Page title --> */}
                           <h1 className="cpynq c1rrq ciz93">My resume</h1>
                           {/* <!-- Page content --> */}
                           <div className="cxslc c2bb0 cjrdl">

                              {/* <!-- Education --> */}
                              <div className="cr8w3">
                                 <h2 className="cxmc9 cg0ht cpynq cjvvo">Education</h2>
                                 <ul className="cr8w3">
                                    {/* <!-- Item --> */}
                                    <li className="c5c77 cpnf3">
                                       <div className="c9nsn cx6rx cimjd c39j0 c3jrd cdoe6 c3eja c4ezg cmvl0 ca62j c0m6u c9noy cfwvb">
                                          <div className="cg3vi cj965 cry3b c81t6 coo5n cax03 cfup8 c5a0p c3iz2 chzqd c9mf7 cr4ta c90wr cfwvb c7yaq co5ux">
                                             <Image src={education_icon_03} width="24" height="26" style={{ scale: 1.2 }} alt="San Jose State UniversitySan Jose State University" />
                                          </div>
                                          <div className="catbp c96dc">
                                             <div className="c2bb0 cd99g ck5r6">May 2013 <span className="cxuy4 crnoq">·</span> Apr 2017</div>
                                             <div className="cxmc9 cg0ht cpynq c670g">Bachelor of Science</div>
                                             <div className="cxmc9 cg0ht cnp10 cme8e">Obafemi Awolowo University (O.A.U.), Ile Ife, Nigeria.</div>
                                             <div className="cxslc c2bb0 cme8e">Throughout my years at O.A.U., I immersed myself in a dynamic learning environment, surrounded by dedicated faculty and talented peers.</div>
                                          </div>
                                       </div>
                                    </li>
                                    {/* <!-- Item --> */}
                                    <li className="c5c77 cpnf3">
                                       <div className="c9nsn cx6rx cimjd c39j0 c3jrd cdoe6 c3eja c4ezg cmvl0 ca62j c0m6u c9noy cfwvb">
                                          <div className="cg3vi cj965 cry3b c81t6 coo5n cax03 cfup8 c5a0p c3iz2 chzqd c9mf7 cr4ta c90wr cfwvb c7yaq co5ux">
                                             <Image src={education_icon_01} width="24" height="24" alt="Purdue University" />
                                          </div>
                                          <div className="catbp c96dc">
                                             <div className="c2bb0 cd99g ck5r6">May 2017 <span className="cxuy4 crnoq">·</span> Apr 2020</div>
                                             <div className="cxmc9 cg0ht cpynq c670g">Nationa Diploma</div>
                                             <div className="cxmc9 cg0ht cnp10 cme8e">Osun State Polytechnic (Ospoly), Iree, Nigeria.</div>
                                             <div className="cxslc c2bb0 cme8e">Throughout my years at Ospoly as a computer science major, I immersed myself in a dynamic learning environment, surrounded by dedicated faculty and talented peers.</div>
                                          </div>
                                       </div>
                                    </li>
                                 </ul>
                              </div>

                              {/* <!-- Work Experience --> */}
                              <Experience title='Work Experience' />


                              {/* <!-- Awards --> */}
                              <div className="cr8w3">
                                 <h2 className="cxmc9 cg0ht cpynq cjvvo">Awards</h2>
                                 <ul className="cr8w3">
                                    {/* <!-- Item --> */}
                                    <li className="c5c77 cpnf3">
                                       <div className="c9noy c0kco cfwvb">
                                          <div className="cg3vi cj965 cry3b c81t6 coo5n cax03 cfup8 c5a0p c3iz2 chzqd c9mf7 cr4ta c90wr cfwvb c7yaq co5ux">
                                             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                                                <path fill="#FACC15" fill-rule="nonzero" d="M10 20a.665.665 0 0 1-.471-.195l-2.471-2.472H3.334a.666.666 0 0 1-.667-.666v-3.724L.196 10.47a.666.666 0 0 1 0-.942l2.47-2.472V3.333c0-.368.299-.666.668-.666h3.724L9.528.195c.262-.26.683-.26.944 0l2.47 2.472h3.725c.369 0 .667.298.667.666v3.724l2.471 2.472c.26.26.26.682 0 .942l-2.471 2.472v3.724a.666.666 0 0 1-.667.666h-3.724l-2.471 2.472c-.13.13-.301.195-.472.195Zm0-6.364a3.636 3.636 0 1 0 0-7.272 3.636 3.636 0 0 0 0 7.272Z"></path>
                                             </svg>
                                          </div>
                                          <div className="catbp c96dc">
                                             <div className="c2bb0 cd99g ck5r6">2023</div>
                                             <div className="cxmc9 cg0ht cpynq c670g">Best Creative Tech Dev</div>
                                             <div className="cxmc9 cg0ht cnp10 cme8e">Business Insider</div>
                                             <div className="cxslc c2bb0 cme8e">This recognition not only affirmed my abilities as a web developer but also highlighted my unique approach to problem-solving.</div>
                                          </div>
                                       </div>
                                    </li>
                                    {/* <!-- Item --> */}
                                    <li className="c5c77 cpnf3">
                                       <div className="c9noy c0kco cfwvb">
                                          <div className="cg3vi cj965 cry3b c81t6 coo5n cax03 cfup8 c5a0p c3iz2 chzqd c9mf7 cr4ta c90wr cfwvb c7yaq co5ux">
                                             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                                                <path fill="#FACC15" fill-rule="nonzero" d="M10 20a.665.665 0 0 1-.471-.195l-2.471-2.472H3.334a.666.666 0 0 1-.667-.666v-3.724L.196 10.47a.666.666 0 0 1 0-.942l2.47-2.472V3.333c0-.368.299-.666.668-.666h3.724L9.528.195c.262-.26.683-.26.944 0l2.47 2.472h3.725c.369 0 .667.298.667.666v3.724l2.471 2.472c.26.26.26.682 0 .942l-2.471 2.472v3.724a.666.666 0 0 1-.667.666h-3.724l-2.471 2.472c-.13.13-.301.195-.472.195Zm0-6.364a3.636 3.636 0 1 0 0-7.272 3.636 3.636 0 0 0 0 7.272Z"></path>
                                             </svg>
                                          </div>
                                          <div className="catbp c96dc">
                                             <div className="c2bb0 cd99g ck5r6">2022</div>
                                             <div className="cxmc9 cg0ht cpynq c670g">Best Creative Product Dev</div>
                                             <div className="cxmc9 cg0ht cnp10 cme8e">Bloomerg Tech</div>
                                             <div className="cxslc c2bb0 cme8e">This recognition not only affirmed my abilities as a web developer but also highlighted my unique approach to problem-solving.</div>
                                          </div>
                                       </div>
                                    </li>
                                 </ul>
                              </div>

                              {/* <!-- Recommendations --> */}
                              <div className="cr8w3">
                                 <h2 className="cxmc9 cg0ht cpynq cjvvo">Recommendations</h2>
                                 <ul className="cr8w3">
                                    {/* <!-- Item --> */}
                                    <li className="c5c77 cpnf3">
                                       <div className="c9noy cfwvb">
                                          <div className="cg3vi cj965 cry3b c81t6 coo5n cfup8 c5a0p c3iz2 chzqd c9mf7 cr4ta cfwvb c7yaq co5ux">
                                             <Image className="c3iz2" src={testimonial_03} width="56" height="56" alt="Testimonial 03" />
                                          </div>
                                          <div className="catbp c96dc">
                                             <div className="cxmc9 cg0ht cpynq c670g">Mary Christopher</div>
                                             <div className="cxmc9 cg0ht cnp10 cme8e">Designer Lead at Inventa Inc.</div>
                                             <div className="cxslc c2bb0 cme8e">“ Working with James on projects is a breath of fresh air. He is an extremely talented dev, with an outstanding work ethic, eye for detail, and speed. James doesn't just execute and deliver incredible codes but works with you to challenge the product or flow at hand to create the best possible solution. ”</div>
                                          </div>
                                       </div>
                                    </li>
                                    {/* <!-- Item --> */}
                                    <li className="c5c77 cpnf3">
                                       <div className="c9noy cfwvb">
                                          <div className="cg3vi cj965 cry3b c81t6 coo5n cfup8 c5a0p c3iz2 chzqd c9mf7 cr4ta cfwvb c7yaq co5ux">
                                             <Image className="c3iz2" src={testimonial_04} width="56" height="56" alt="Testimonial 04" />
                                          </div>
                                          <div className="catbp c96dc">
                                             <div className="cxmc9 cg0ht cpynq c670g">Harry Kastelli</div>
                                             <div className="cxmc9 cg0ht cnp10 cme8e">CEO &amp; Founder Mark Corp.</div>
                                             <div className="cxslc c2bb0 cme8e">“ James is an excellent developer. He is not just quick to evaluate and translate ideas into high-fidelity codes, but he's also well-versed in UX strategy. While working together, James handled our external partnership with Design Agencies, and delivered weekly progress reports with fresh ideas. ”</div>
                                          </div>
                                       </div>
                                    </li>
                                 </ul>
                              </div>

                           </div>
                        </section>

                     </div>
                  </div>

                  {/* <!-- Right sidebar --> */}
                  <aside className="cd6k2 cf0x4 csb3e">

                     <div className="c92wf">

                        {/* <!-- Technical Skills widget --> */}
                        <TechnicalWidget title="Technical Skills" />

                        {/* <!-- Languages widget --> */}
                        <LanguageWidget title='Languages' />

                        {/* <!-- References widget --> */}
                        <ReferencesWidget title='References' />

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
