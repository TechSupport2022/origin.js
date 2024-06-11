import React from 'react'

const LanguageWidget = ({ title }: { title: string }) => {
   return (
      <>
         <div className="cg3vi cj965 cry3b c81t6 cax03 c1gvt czh94 czz51 c90wr c5oxi">
            <div className="cpynq c670g cec5b">Languages</div>
            <ul className="c3y7y">
               <li className="cpk71 c5a0p cfwvb">
                  <div className="cz5kb crym2 c3rtw c4a0m">
                     <span className="cp130 c3rtw">🇬🇧</span> <span className="cpynq c670g crym2 cme8e">English</span>
                  </div>
                  <div className="c80ee cre3k cin3w c981s cjg8k cc1zk c7872 cohra c3iz2 ck1f0 cg026 c5c77 csb3e c1hqr c5joj" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
               </li>
               <li className="cpk71 c5a0p cfwvb">
                  <div className="cz5kb crym2 c3rtw c4a0m">
                     <span className="cp130 c3rtw">🇮🇹</span> <span className="cpynq c670g crym2 cme8e">Italian</span>
                  </div>
                  <div className="c80ee cre3k cin3w c981s cjg8k cc1zk c7872 cohra c3iz2 ck1f0 cg026 c5c77 csb3e c1hqr c5joj" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
               </li>
               <li className="cpk71 c5a0p cfwvb">
                  <div className="cz5kb crym2 c3rtw c4a0m">
                     <span className="cp130 c3rtw">🇪🇸</span> <span className="cpynq c670g crym2 cme8e">Spanish</span>
                  </div>
                  <div className="cx3us c8hyf cin3w c981s cjg8k cc1zk c7872 cohra c3iz2 ck1f0 cg026 c5c77 csb3e c1hqr c5joj" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
               </li>
            </ul>
         </div>
      </>
   )
}

export default LanguageWidget
