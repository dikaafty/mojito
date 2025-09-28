import { storeInfo, openingHours, socials } from "../constants";
import { SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Contact = () => {
  useGSAP(() => {
    
  }, []);

  return (
    <footer id="contact">
      <img 
        src="/images/footer-right-leaf.png" 
        alt="right leaf" 
        id="f-right-leaf"
      />

      <img 
        src="/images/footer-left-leaf.png" 
        alt="left leaf" 
        id="f-left-leaf"
      />

      <div className="content">
        <h2>{storeInfo.heading}</h2>

        <div>
          <h3>Visit Our Bar</h3>
          <p>{storeInfo.address}</p>
        </div>

        <div>
          <h3>Contact Us</h3>
          <p>{storeInfo.contact.phone}</p>
          <p>{storeInfo.contact.email}</p>
        </div>

        <div>
          <h3>Open Every Day</h3>
          {
            openingHours.map(time => (
              <p key={time.day}>
                {time.day} : {time.time}
              </p>
            ))
          }
        </div>

        <div>
          <h3>Socials</h3>
          
          <div className="flex-center gap-5">
            {
              socials.map(social => (
                <a 
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                >
                  <img 
                    src={social.icon} 
                    alt={`${social.name} Icon`} 
                  />
                </a>
              ))
            }
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Contact;