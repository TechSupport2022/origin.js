'use client'


import Image from "next/image";

import { me, me2, popular_post_01, popular_post_02, post_thumb_01, project_icon_01, project_icon_02 } from "@/assets"
import RightSidebar from "@/component/RightSidebar";
import { useEffect, useState } from "react";
import Spinner from "@/component/Spinner";
import Link from "next/link";
import { useRouter } from "next/navigation";
import LoadingModal from "@/component/LoadingModal";

export default function Home() {

   interface Post {
      _id: string;
      title: String,
      content: String,
      author: String,
      description: String,
      category: [string],
      createdAt: {
         type: Date,
         default: Date
      }
   }


   const router = useRouter();

   const activeClass = 'cxmc9 cgygf cg0ht cnp10 ch63g chipd cen0e tab-head active';
   const oldClass = 'cts6h cb9ru cxslc c2bb0 chipd cen0e tab-head';

   const [posts, setPosts] = useState<Post[]>([]);
   const [activeTab, setActiveTab] = useState<string>('all');
   const [loading, setLoading] = useState<boolean>(true); // Initial loading state
   const [loadingModal, setLoadingModal] = useState<boolean>(false); // Initial loading modal state
   const [page, setPage] = useState(1);
   const [totalPages, setTotalPages] = useState(1);
   const [user, setUser] = useState<any>(null);
   // const [user, setUser] = useState(localStorage.getItem('user'));



   const fetchPosts = async () => {
      setLoading(true);
      try {
         const response = await fetch(`/api/posts?page=${page}&limit=5`);
         const data = await response.json();
         setPosts(data.data);
         setTotalPages(data.totalPages);
      } catch (error) {
         console.error('Error fetching posts:', error);
      } finally {
         setLoading(false);
      }
   };

   useEffect(() => {
      if (typeof window !== 'undefined') {
         // This code will only run on the client side
         const storedUser = localStorage.getItem('user');
         setUser(storedUser);
         console.log('This is user secret: ', process.env.NEXT_PUBLIC_USER_SECRET_KEY);
         console.log("This is localStorage user: ", storedUser);
      }

      fetchPosts();
   }, [page]);

   const handleNextPage = () => {
      if (page < totalPages) {
         setPage((prevPage) => prevPage + 1);
      }
   };

   const handlePreviousPage = () => {
      if (page > 1) {
         setPage((prevPage) => prevPage - 1);
      }
   };

   const handleToggleTab = (tab: string, event: React.MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();
      setActiveTab(tab);
   };

   const matchesActiveTab = (category: [string], activeTab: string) => {
      console.log("This is category: " + category)
      let result = activeTab === 'all' || category.some(cat => String(cat.toString()).includes(activeTab));
      console.log(result);
      return result;
   }

   const handleDelete = async (postId: string) => {
      console.log("Deleting item: " + postId);
      setLoadingModal(true);
      try {
         const response = await fetch(`/api/posts/${postId}`, {
            method: 'DELETE',
         });
         const data = await response.json();
         if (data.success) {
            fetchPosts(); // Refresh the posts list after deletion
         } else {
            console.error('Failed to delete post:', data.error);
         }
      } catch (error) {
         console.error('Error deleting post:', error);
      }
      finally {
         setLoadingModal(false);
      }
   }

   const handleEdit = (id: string) => {
      console.log("Edit item: ", id);
      router.push(`/edit/${id}`)
   }

   const filteredPosts = posts?.filter(post => matchesActiveTab(post.category, activeTab));
   console.log(filteredPosts)



   return (
      <>
         {
            loadingModal && <LoadingModal loading={true} />
         }

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
                              <a className={`${activeTab == 'all' ? activeClass : oldClass} tab-head cursor-pointer`} href="" id="all" onClick={(event) => handleToggleTab('all', event)}>All</a>
                           </li>
                           <li className="cz4pw c59mu">
                              <a className={`${activeTab == 'coding' ? activeClass : oldClass} tab-head cursor-pointer`} href="" id="coding" onClick={(event) => handleToggleTab('coding', event)}>Coding</a>
                           </li>
                           <li className="cz4pw c59mu">
                              <a className={`${activeTab == 'tutorial' ? activeClass : oldClass} tab-head cursor-pointer`} href="" id="tutorial" onClick={(event) => handleToggleTab('tutorial', event)}>Tutorials</a>
                           </li>
                           <li className="cz4pw c59mu">
                              <a className={`${activeTab == 'indie' ? activeClass : oldClass} tab-head cursor-pointer`} href="" id="indie" onClick={(event) => handleToggleTab('indie', event)}>Indie Hacking</a>
                           </li>
                        </ul>
                        {/* <!-- Articles list --> */}
                        <div> </div>



                        {/* image: post_thumb_01 */}
                        <div id="tab-body">
                           {loading && <Spinner loading={loading} />}

                           {!loading && posts && (
                              <>
                                 {/* {[{ id: 'coding', img: me2 }, { id: 'tutorial', img: me }, { id: 'indie', img: me }].map((article, index) => { */}
                                 {filteredPosts?.map((article, index) => {
                                    return (
                                       // <article key={index} className={`${'cg3vi crdpf c8z7y c3bdg'}`} id={`${article.category}`}>
                                       //    <div className="c9noy cfwvb">
                                       //       <Image className="c906c cr6xl c8c2x c9xwx ccj8i co6sp c5zj3 bg-blue" src={me2} width="88" height="88" alt="Post 01" />
                                       //       <div>
                                       //          <div className="c2bb0 cd99g ck5r6 c0kco" id="post-date">
                                       //             <span className="chugl">—</span>
                                       //          </div>
                                       //          <h3 className="cpynq c670g c5rvt c0kco">
                                       //             <Link className="cfsb7 c2ers cofz6 cubqj cq25t cegle chlgd cdaqi c3ntq csd7h cdie3 c4ezg c8xm0 c6esp cofma cz5kb c5c77 cn2yf" href={`/posts/${article._id}`} id="post-title">An Interactive Guide to Flexbox</Link>
                                       //          </h3>
                                       //          <div className="cfwvb">
                                       //             <div className="cxslc c2bb0 cme8e c4a0m" id="post-description"> Flexbox is a remarkably flexible layout mode. When we understand how it works, we can build responsive designs that rearrange themselves as needed. </div>
                                       //             <Link className="cfup8 c5a0p chugl csb3e c86uy cw2lf cpnf3 cgej2" href={`/posts/${article._id}`} tabIndex={-1}>
                                       //                <svg className="cqlhq cjnrq cofma chtu4" xmlns="http://www.w3.org/2000/svg" width="14" height="12">
                                       //                   <path d="M9.586 5 6.293 1.707 7.707.293 13.414 6l-5.707 5.707-1.414-1.414L9.586 7H0V5h9.586Z"></path>
                                       //                </svg>
                                       //             </Link>
                                       //          </div>
                                       //       </div>
                                       //    </div>
                                       // </article>

                                       <article key={index} className={`${'cg3vi crdpf c8z7y c3bdg'}`} id={`${article.category}`}>
                                          <div className="c9noy cfwvb">
                                             <div style={{ display: "flex", alignItems: "center", flex: 2, }}>
                                                <Image className="c906c cr6xl c8c2x c9xwx ccj8i co6sp c5zj3 bg-blue" src={me2} width="88" height="88" alt="Post 01" />
                                                <div>
                                                   {/* <div className="c2bb0 cd99g ck5r6 c0kco" id="post-date">
                                                      <span className="chugl">—</span>
                                                   </div> */}
                                                   <h3 className="cpynq c670g c5rvt c0kco">
                                                      <Link className="cfsb7 c2ers cofz6 cubqj cq25t cegle chlgd cdaqi c3ntq csd7h cdie3 c4ezg c8xm0 c6esp cofma cz5kb c5c77 cn2yf" href={`/posts/${article._id}`} id="post-title"> {article.title} </Link>
                                                   </h3>
                                                   <div className="cfwvb">
                                                      <div className="cxslc c2bb0 cme8e c4a0m" id="post-description" >
                                                         <div className="trimDescription">
                                                            {article.description}
                                                         </div>
                                                      </div>
                                                      <Link className="cfup8 c5a0p chugl csb3e c86uy cw2lf cpnf3 cgej2" href={`/posts/${article._id}`} tabIndex={-1}>
                                                         <svg className="cqlhq cjnrq cofma chtu4" xmlns="http://www.w3.org/2000/svg" width="14" height="12">
                                                            <path d="M9.586 5 6.293 1.707 7.707.293 13.414 6l-5.707 5.707-1.414-1.414L9.586 7H0V5h9.586Z"></path>
                                                         </svg>
                                                      </Link>
                                                   </div>
                                                </div>
                                             </div>
                                             {
                                                user == process.env.NEXT_PUBLIC_USER_SECRET_KEY &&

                                                <div style={{ display: "flex", gap: "1rem" }}>
                                                   <div title="Delete">
                                                      <svg onClick={() => handleDelete(article._id)} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3-fill" viewBox="0 0 16 16" style={{ cursor: "pointer", color: "orchid" }}>
                                                         <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" />
                                                      </svg>
                                                   </div>

                                                   <div title="Edit">
                                                      <svg onClick={() => handleEdit(article._id)} xlinkTitle="edit" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" className="bi bi-pen" style={{ cursor: "pointer" }}>
                                                         <defs>
                                                            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                                               <stop offset="0%" style={{ stopColor: "#4ca5ff", stopOpacity: 1 }} />
                                                               <stop offset="100%" style={{ stopColor: "#b573f8", stopOpacity: 1 }} />
                                                            </linearGradient>
                                                         </defs>
                                                         <path fill="url(#gradient)" d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001m-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708z"></path>
                                                      </svg>
                                                   </div>
                                                </div>
                                             }
                                          </div>
                                       </article>
                                    )
                                 })}

                                 <div className="pagination-container">
                                    {/* {filteredPosts.map((item, index) => {
                                       let page = index + 1;
                                       return ( */}

                                    <button className="pagination-btn" onClick={handlePreviousPage} disabled={page === 1}>Previous</button>
                                    <span>Page {page} of {totalPages}</span>
                                    <button className="pagination-btn" onClick={handleNextPage} disabled={page === totalPages}> Next </button>

                                    {/* )
                                    })} */}
                                 </div>
                              </>

                           )}

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
