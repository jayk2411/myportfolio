//project.jsx, JAYKUMAR KAKADIYA, 301430863, and 28/01/2024.
import project1 from '../src/assets/project1.png';
import project4 from '../src/assets/project4.jpg';
import project7 from '../src/assets/project7.jpg';
import '../src/index.css'
import '../src/project.css'
export default function Project() {
     return <>

          <section id="works">
               <div className='container'>
                    <h2 className="worksTitle">My Projects</h2>
                    <span className="worksDesc">I take pride in paying attention to the smallest details and making sure my work is pixel perfect/
                         I am excited to bring my skills and experience to help businesses achieve their goals and create a strong online presence.</span>
                    <div className="row p-2">
                         <div className='col-sm'>
                              <div className="card">
                                   <div>
                                        <img src={project1} className="card-img-top" alt="..." />
                                   </div>
                                   <div className="card-body">
                                        <h5 className="card-title">RTO Project</h5>
                                        <p className="card-text">Simplify vehicle registrations, license renewals, and other RTO services with a user-friendly mobile app. Enhance convenience, reduce paperwork, and improve efficiency in managing transportation-related processes.</p>
                                   </div>
                              </div>
                         </div>
                         <div className='col-sm'>
                              <div className="card">
                                   <div>
                                        <img src={project4} className="card-img-top" alt="..." />
                                   </div>
                                   <div className="card-body">
                                        <h5 className="card-title">Hospital Management</h5>
                                        <p className="card-text">Efficiently manage hospital operations and patient care with a comprehensive mobile app. Streamline workflows, improve communication, and enhance overall efficiency for better healthcare delivery.</p>
                                   </div>
                              </div>
                         </div>
                         <div className='col-sm'>
                              <div className="card">
                                   <div>
                                        <img src={project7} className="card-img-top" alt="..." />
                                   </div>
                                   <div className="card-body">
                                        <h5 className="card-title">Home Applience</h5>
                                        <p className="card-text">Streamlining home appliance management with a user-friendly mobile app. Control, monitor, and optimize your appliances for enhanced convenience and energy efficiency.</p>
                                   </div>
                              </div>
                         </div>


                    </div>
               </div>

               {/* <button className="workBtn">See More</button> */}


          </section>


     </>
}
