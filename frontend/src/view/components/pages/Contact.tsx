import React, { useState, useEffect } from "react";
import axios from "axios";
import { TabTitle } from "../TabTitle";
import { useLocation } from "react-router-dom";
import PhoneInput from "react-phone-number-input";

function Contact() {
  const { pathname } = useLocation();
  TabTitle(pathname?.slice(1).toUpperCase()+' - Diyorbek Xidirov');
  var telegram_bot_id = "6196550956:AAFIKATdN8teczNIyHV36TMkHMtgRXRijEE";
  var chat_id = 980656218;
  //
  const [errorFields, setErrorFields] = useState<any>(false);
  const [success, setSuccess] = useState<any>(false);
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<any>("");
  const [message, setMessage] = useState<string>("");
  const [loader, setLoader] = useState<boolean>(false);

  function SendMessage() {
    setLoader(true);
    if (name != "" && phone && message != "") {
      var txt = "👨‍💼: " + name + "\n 📞 : " + phone + "\n✍️ : " + message;
      axios
        .post(`https://api.telegram.org/bot${telegram_bot_id}/sendMessage`, {
          chat_id: chat_id,
          text: txt,
        })
        .then((res) => {
          console.log("Telegram bot send Success...");
          console.log(res);
          setName("");
          setPhone("");
          setMessage("");
          setSuccess(true);
          setLoader(false);
          setErrorFields(false);
        })
        .catch((err) => {
          console.log("Error Telegram bot");
          setLoader(false);
          console.log(err);
          setErrorFields(true);
          setSuccess(false);
        });
    } else {
      setErrorFields(true);
      setLoader(false);
      setSuccess(false);
    }
  }
  return (
    <>
      <div id="contact" className="tokyo_tm_section animate">
        <div className="container">
          <div className="tokyo_tm_contact">
            <div className="tokyo_tm_title">
              <div className="title_flex">
                <div className="left">
                  <span>Contact</span>
                  <h3>Get in Touch</h3>
                </div>
              </div>
            </div>
            <div className="map_wrap">
              <div className="mapouter">
                <div className="gmap_canvas">
                  <iframe
                    width="100%"
                    height="355"
                    id="gmap_canvas"
                    src={
                      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d191884.74398879893!2d69.13928372414499!3d41.282770554953494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0cc379e9c3%3A0xa5a9323b4aa5cb98!2z0KLQsNGI0LrQtdC90YIsINCj0LfQsdC10LrQuNGB0YLQsNC9!5e0!3m2!1sru!2s!4v1673811170699!5m2!1sru!2s"
                    }
                  ></iframe>
                  <a href="https://fmovies-online.net/">fmovies</a>
                  <br />
                  <a href="https://www.embedgooglemap.net/">
                    embedgooglemap.net
                  </a>
                </div>
              </div>
            </div>
            <div className="fields">
              <form
                className="contact_form"
                id="contact_form"
                // autoComplete="off"
              >
                <div
                  className="returnmessage"
                  data-success="Your message has been received, We will contact you soon."
                ></div>
                {errorFields && (
                  <div className="empty_notice">
                    <span>Please Fill Required Fields</span>
                  </div>
                )}
                {success && (
                  <div className="empty_success">
                    <span>Sent successfully</span>
                  </div>
                )}

                <div className="first">
                  <ul>
                    <li>
                      <input
                        id="name"
                        autoComplete="off"
                        required
                        value={name}
                        onChange={(e: any) => setName(e.target.value)}
                        type="text"
                        placeholder="Name"
                      />
                    </li>
                    <li>
                      <PhoneInput
                        placeholder="Phone Number"
                        maxLength={20}
                        defaultCountry="UZ"
                        value={phone}
                        onChange={setPhone}
                        rules={{ required: true }}
                      />
                    </li>
                  </ul>
                </div>
                <div className="last">
                  <textarea
                    id="message"
                    required
                    value={message}
                    onChange={(e: any) => setMessage(e.target.value)}
                    placeholder="Message"
                  ></textarea>
                </div>
                <div className="tokyo_tm_button" data-position="left">
                  <a
                    aria-disabled={true}
                    id="send_message"
                    href="#"
                    onClick={SendMessage}
                  >
                    <span>{loader ? "Loading..." : "Send Message"}</span>
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
