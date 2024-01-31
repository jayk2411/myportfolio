//contat.jsx, JAYKUMAR KAKADIYA, 301430863, and 28/01/2024.
import { useNavigate } from "react-router-dom";
import '../src/contact.css'
export default function Contact() {

     let navigate = useNavigate();
     const routeChange = (event) => {
          event.preventDefault();
          alert("Thank you for contacting us. We will get back to you as soon as possible.");
          let path = '/';
          navigate(path);
     }
     return (
          <div>
               <p>Contact</p>
               <form id="ffp" onSubmit={routeChange}>


                    <label htmlFor="myFName"> *First Name: </label>
                    <input type="text" id="myFName" name="myFName" required="required" autoFocus /> <br /> <br />

                    <label htmlFor="myLName"> *Last Name: </label>
                    <input type="text" id="myLName" name="myLName" required="required" /> <br /> <br />


                    <label htmlFor="myEmail"> *Email: </label>
                    <input type="email" id="myEmail" name="myEmail" required="required" /> <br /> <br />

                    <input type="submit" className="submit" value="Submit"/> <br />


               </form> <br></br>
               <p><i>Call me on: <strong>+1(416)-826-4373</strong></i></p>
               <a className='d-flex justify-content-center' style={{ color: 'var(--bs-body-color)', fontWeight: '400' }} href="mailto:jaykakdiya2411@gmail.com">email:<strong>jaykakdiya2411@gmail.com</strong></a>
          </div>
     );
}
