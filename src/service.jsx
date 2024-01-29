//service.jsx, JAYKUMAR KAKADIYA, 301430863, and 28/01/2024.
import '../src/service.css';
export default function Service() {
     return (
          <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
               <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                    <div className=' w-full flex justify-center items-center flex-col mb-7'>
                         <p className='text-4xl font-bold inline border-b-4 border-cyan-500 text-center '>Skills</p>
                         <p className='py-4 text-2xl'>I enjoy diving into and learning new things. Here's a list of technologies I've worked with</p>
                    </div>
                    <div class="container">
                         <div class="row flex-extra">
                              <div class="col-sm">
                                   <div className="background">
                                        <p>HTML</p>
                                   </div>
                              </div>
                              <div class="col-sm">
                                   <div className="background">
                                        <p>CSS</p>
                                   </div>
                              </div>
                              <div class="col-sm">
                                   <div className="background">
                                        <p>JAVASCRIPT</p>
                                   </div>
                              </div>
                         </div>
                         <div class="row flex-extra">
                              <div class="col-sm">
                                   <div className="background">
                                        <p>REACT</p>
                                   </div>
                              </div>
                              <div class="col-sm">
                                   <div className="background">
                                        <p>GITHUB</p>
                                   </div>
                              </div>
                              <div class="col-sm">
                                   <div className="background">
                                        <p>NODE JS</p>
                                   </div>
                              </div>
                         </div>

                         <div class="row flex-extra">
                              <div class="col-sm">
                                   <div className="background">
                                        <p>ANGULAR</p>
                                   </div>
                              </div>
                              <div class="col-sm">
                                   <div className="background">
                                        <p>MONGO DB</p>
                                   </div>
                              </div>
                              <div class="col-sm">
                                   <div className="background">
                                        <p>AWS</p>
                                   </div>
                              </div>
                         </div>

                         <div class="row flex-extra">
                              <div class="col-sm">
                                   <div className="background">
                                        <p>Sass</p>
                                   </div>
                              </div>
                              <div class="col-sm">
                                   <div className="background">
                                        <p>Mongodb</p>
                                   </div>
                              </div>
                              <div class="col-sm">
                                   <div className="background">
                                        <p>GraphQl</p>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
}
