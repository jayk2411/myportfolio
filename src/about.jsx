//about.jsx, JAYKUMAR KAKADIYA, 301430863, and 28/01/2024.
import webDev from '../src/assets/webdeve.jpeg';
import fullstack from '../src/assets/full-stack-developer.jpg';
import WEB from '../src/assets/Website-Design.jpeg';
import '../src/index.css'
import '../src/about.css'
export default function About() {
     return <>
     
     <section id="skill">
         
          <span className="skillTitle">What I do</span>
          <span className="skillDesc">I am a skilled and passionate web developer with experience in creating visually appealing and user-friendly websites. I have a strong understanding of design and a keen eye for detail. I am proficient in HTML, CSS, and JavaScript, Angular, React, as well as design software such as Adobe Photoshop and Figma.</span> 
          <div className="skillBar">
               <img src={webDev} alt="WEBDEVELOPER" className="skillBarImg" />
               <div className="skillBarText">
               <h2>WEB DEVELOPER</h2>
               <p>Creating innovative and user-friendly web solutions that drive engagement and deliver a seamless digital experience.</p>
               </div>

          </div>
          
          <div className="skillBar">
               <img src={fullstack} alt="fullstack" className="skillBarImg" />
               <div className="skillBarText">
               <h2>FULL STACK DEVELOPER</h2>
               <p>Building robust and scalable web applications with expertise in both front-end and back-end development. Creating dynamic and interactive user experiences to drive business growth and enhance online presence.</p>
               </div>

          </div>

          <div className="skillBar">
               <img src={WEB} alt="AppDesign" className="skillBarImg" />
               <div className="skillBarText">
               <h2>WEB DESIGN</h2>
               <p>Designing visually stunning and user-friendly websites that captivate audiences and convey brand messaging effectively. Combining creativity and functionality to create impactful online experiences that drive engagement and conversion.</p>
               </div>

          </div>
          
                  
     </section>
    

     </>
    }
    