//home.jsx, JAYKUMAR KAKADIYA, 301430863, and 28/01/2024.
import BBG from '../src/assets/Profilepic.jpeg';
import hire from '../src/assets/hire.jpg';
import { Link } from 'react-router-dom';
import '../src/index.css'

export default function Home() {
     return <>

          <section id="intro" className='row'>
               <div className="col-sm-6 intro">
                    <span className="hello">Hello,</span><br />
                    <span className="introText">I am <span className="introName">JAYKUMAR KAKADIYA</span>
                         <br />Website Developer</span>
                    <p className="introPara">I am a skilled web developer with experience in creating visually appealing user friendly websites and creating new features our requirements of making on time.</p>
                    <Link target='_blank' to="https://bold.pro/my/jaykumar-kakdiya/210"><button className="btn"><img src={hire} alt="Hire me" width="100px" height="100px" /></button></Link>
               </div>

               <div className='col-sm-6'>
                    <img src={BBG} alt="profile" className="bbg object-fit" width="750" height="750" align="right" />
               </div>

          </section>


     </>
}
