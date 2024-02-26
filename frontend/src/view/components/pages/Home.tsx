
// @ts-ignore
import { Typewriter } from "react-simple-typewriter";
import Avatar from "../../assets/img/slider/pc.png";
import { TabTitle } from "../TabTitle";
function Home() {
  TabTitle("Professional web developer - Diyorbek Xidirov");
  var developers: any = [
    "Web developer </>",
    "Mobile developer </>",
    "Freelancer </>",
    "MERN Stack developer </>",
    "PUBG player",
    "CHESS player ♟",
  ];
  const mylink: any = [
    {
      icon: "fa-brands fa-telegram",
      link: "https://t.me/deyorbeck",
      status: true,
    },
    {
      icon: "fa-brands fa-instagram",
      link: "https://www.instagram.com/deyorbeck",
      status: true,
    },
    {
      icon: "fa-brands fa-github",
      link: "https://github.com/diyordeveloper",
      status: true,
    },
    // {
    //   icon: "fa-brands fa-twitter",
    //   link: "https://twitter.com/diyorcoder",
    //   status: true,
    // },
    {
      icon: "fa-brands fa-facebook",
      link: "https://www.facebook.com/deyorbeck",
      status: true,
    },
    {
      icon: "fa-brands fa-linkedin",
      link: "https://www.linkedin.com/in/diyorbekdeveloper",
      status: true,
    },
    // {
    //   icon: "fa-brands fa-youtube",
    //   link: "https://www.youtube.com/@diyorcoder",
    //   status: false,
    // },
  ];
  return (
    <>
      <div id="home" className="tokyo_tm_section animate">
        <div className="container">
          <div className="tokyo_tm_home  ">
            <div className="home_content">
              <div className="avatar">
                <div
                  className="image"
                  style={{
                    backgroundImage: `url(${Avatar})`,
                  }}
                ></div>
              </div>
              <div className="details">
                <h3 className="name">DIYORBEK XIDIROV</h3>
                <h4 className="developer">
                  I'm a{" "}
                  <Typewriter
                    words={developers}
                    loop={1000}
                    cursor
                    cursorStyle={`|`}
                    typeSpeed={80}
                    deleteSpeed={50}
                    delaySpeed={2000}
                  />
                </h4>
                <p className="job">
                  Experienced JavaScript developer, 2 years in the field.
                  Proficient with React. 100% on time product delivery.
                </p>
                <div className="social">
                  <ul>
                    {mylink.map((link: any, indx: any) => (
                      <li
                        key={link.link}
                        style={{ animationDelay: `${indx}s` }}
                      >
                        {link.status && (
                          <a href={link.link} target="_blank">
                            <i className={`${link.icon}`}></i>
                          </a>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
