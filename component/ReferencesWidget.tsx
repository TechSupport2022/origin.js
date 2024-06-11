import { reference_01, reference_02 } from '@/assets'
import Image from 'next/image'
import React from 'react'

const ReferencesWidget = ({title} : {title: string}) => {
   return (
      <>
         <div className="cg3vi cj965 cry3b c81t6 cax03 c1gvt czh94 czz51 c90wr c5oxi">
            <div className="cpynq c670g cec5b">{title}</div>
            <ul className="c3y7y">
               <li>
                  <a className="cpk71 c5a0p c07io cpnf3 cfwvb" href="#0">
                     <div className="c5a0p ckgwf crym2 cfwvb c4a0m">
                        <Image className="c3iz2" src={reference_01} width="32" height="32" alt="Mr. Mark Smularkov" />
                        <div className="crym2">
                           <div className="cpynq c670g crym2 cme8e c0kco">Mr. Mark Smularkov</div>
                           <div className="cxslc c2bb0 ck5r6">CEO, Acme Tech.</div>
                        </div>
                     </div>
                     <div className="chugl csb3e">
                        <svg className="cblsf ck1rl cjnrq cq4kb cn2yf" xmlns="http://www.w3.org/2000/svg" width="14" height="12">
                           <path d="M9.586 5 6.293 1.707 7.707.293 13.414 6l-5.707 5.707-1.414-1.414L9.586 7H0V5h9.586Z"></path>
                        </svg>
                     </div>
                  </a>
               </li>
               <li>
                  <a className="cpk71 c5a0p c07io cpnf3 cfwvb" href="#0">
                     <div className="c5a0p ckgwf crym2 cfwvb c4a0m">
                        <Image className="c3iz2" src={reference_02} width="32" height="32" alt="Jame Kulls" />
                        <div className="crym2">
                           <div className="cpynq c670g crym2 cme8e c0kco">Jame Kulls</div>
                           <div className="cxslc c2bb0 ck5r6">CEO, Money Maker</div>
                        </div>
                     </div>
                     <div className="chugl csb3e">
                        <svg className="cblsf ck1rl cjnrq cq4kb cn2yf" xmlns="http://www.w3.org/2000/svg" width="14" height="12">
                           <path d="M9.586 5 6.293 1.707 7.707.293 13.414 6l-5.707 5.707-1.414-1.414L9.586 7H0V5h9.586Z"></path>
                        </svg>
                     </div>
                  </a>
               </li>
            </ul>
         </div>
      </>
   )
}

export default ReferencesWidget
