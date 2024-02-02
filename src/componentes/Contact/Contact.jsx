import "./contact.css";

import emailjs from "@emailjs/browser";
import { useContext, useRef, useState } from "react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8g2f0hj",
        "template_qc3ohqk",
        formRef.current,
        "u_grGElhpORT6KAhe"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <div className="c">
        <div className="c-bg"></div>
        <div className="c-wrapper">
          <div className="c-left">
            <h1 className="c-title">Get in touch!</h1>
            <img
              src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExeW1hMWN0dmNuYXY2MGI4Mjl1aHZheDZtODVhZTljNDl6aWptazNpaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/IHkILvQZ94BxMdBHp0/giphy.gif"
              alt=""
              srcset=""
              className="contact-gif"
            />
            <p>
              <a href="https://giphy.com/gifs/3d-boy-lofi-IHkILvQZ94BxMdBHp0"></a>
            </p>
            <div className="c-info">
              <div className="c-info-item">
                <LocalPhoneIcon className="c-icon color-hover " /> +57 316 868
                9229
              </div>
              <div className="c-info-item">
                <EmailIcon className="c-icon color-hover" />
                <a href="mailto:wmurciarey9@gmail.com">wmurciarey9@gmail.com</a>
              </div>
            </div>
          </div>
          <div className="c-right">
            <p className="c-desc">
              <b>Hey! Let's connect,</b> looking forward to hearing more from
              you.
            </p>
            <form ref={formRef} onSubmit={sendEmail}>
              <input type="text" placeholder="Name" name="fullName" />
              <input type="text" placeholder="Subject" name="subject" />
              <input type="text" placeholder="Email" name="email" />
              <textarea rows="5" placeholder="Message" name="message" />
              <button>Submit</button>
              {done && "    Thank you... Your message has been sent"}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
