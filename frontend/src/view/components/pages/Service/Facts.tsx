import   { useState } from "react";
import CountUp from "react-countup";
// import ScrollTrigger from "react-scroll-trigger";

function Facts() {
  // const [counterOn, setCounterOn] = useState<boolean>(false);
  return (
    <div className="tokyo_tm_facts">
      <div className="container">
        <div className="tokyo_section_title">
          <h3>Fun Facts</h3>
        </div>
        <div className="list">
          <ul>
            <li>
              <div className="list_inner">
                <h3>
                  <CountUp end={5} duration={5} delay={0} />
                  {" + "}
                </h3>
                <span>Projects Completed</span>
              </div>
            </li>
            <li>
              <div className="list_inner">
                <h3>
                  <CountUp end={5} duration={5} delay={2} />
                  {" + "}
                </h3>
                <span>Happy Clients</span>
              </div>
            </li>
            <li>
              <div className="list_inner">
                <h3>
                  <CountUp end={1000} duration={10} delay={0} />
                  {" K+ "}
                </h3>
                <span>Lines of Code</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Facts;
