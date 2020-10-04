import React, { useState } from 'react';
import './Contact.css'
import EmailSharpIcon from '@material-ui/icons/EmailSharp'
import PhoneRoundedIcon from '@material-ui/icons/PhoneRounded';
import ScheduleIcon from '@material-ui/icons/Schedule';
import LocationOnRoundedIcon from '@material-ui/icons/LocationOnRounded';
import Particle from './Particles'
import { db } from './Firebase'
import M from 'materialize-css'
import Aos from "aos"
import "aos/dist/aos.css"

function Contact() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [loader , setLoader] = useState(false)


  const handleSubmit = (e)=>{
    e.preventDefault();
    setLoader(true);

    db.collection('contacts').add({
      name:name ,
      email:email , 
      message:message
    }).then(()=>{
      alert('message has been sent!!');
      // M.toast({ html:"Message has been sent!!" ,  classes: "#66bb6a green lighten-1" })
      setLoader(false);
    }).catch((error)=>{
      alert(error.message);
      // M.toast({ html: error.message, classes: "#b71c1c red darken-4" })
    })

    setName('');
    setEmail('');
    setMessage('');

  }

  return (
    <div>
    <form className="my_contacts" onSubmit={handleSubmit}>
      <table>
        <tr >
          <td>
            <Particle />
          </td>

          <td>
            <div class="contact-section" style={{ position: "relative" }}>
              <div class="contact-info">
                <div style={{ fontWeight: 'bolder' }}><LocationOnRoundedIcon />New Delhi, India</div>
                <div style={{ fontWeight: 'bolder' }}><EmailSharpIcon /> manikathuria2001@gmail.com</div>
                <div style={{ fontWeight: 'bolder' }}>  <PhoneRoundedIcon /> +91 888 236 5716</div>
                {/* <div><ScheduleIcon /> Mon - Fri 8:00 AM to 5:00 PM</div> */}
              </div>

              <div class="contact-form">
                <h2 style={{ letterSpacing: "25px" }}>Contact Me</h2>
                <form class="contact" action="">
                  <input type="text" name="name" class="text-box" placeholder="Your Name"
                    value={name}
                      onChange={(e) => { setName(e.target.value) }}
                    required />
                  <input type="email" name="email" class="text-box" placeholder="Your Email"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value) }}
                    required />
                  <textarea name="message" rows="5" placeholder="Your Message"
                    value={message}
                    onChange={(e) => { setMessage(e.target.value) }}
                    required></textarea>
                  <input type="submit" name="submit" class="send-btn" value="Send"/>
                </form>
              </div>


            </div>
          </td>
        </tr>
      </table>


    </form>
    </div>
  )
}

export default Contact;