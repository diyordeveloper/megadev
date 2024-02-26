import React from "react";

function Education() {
  var education: any = [
    {
      time: "2022 - 2024",
      title: "Light Vocational College",
      subtitle: "Computer sciense",
    },
    {
      time: "2020 - 2022",
      title: "PDP IT Academy",
      subtitle: "Frontend (React Js) developer",
    },
  ];
  var experience: any = [
    {
      time: "January - Now",
      title: "Freelancer",
      subtitle: "Mobile and Web developer",
    },
    {
      time: "July - 2023 January",
      title: "Empire IT Academy",
      subtitle: "Mobile and Web developer",
    },
    {
      time: "Juny - July",
      title: "Terra Tech",
      subtitle: "Frontend (React Js) developer",
    },
    {
      time: "2022 - Juny",
      title: "Now IT",
      subtitle: "Frontend (React Js) developer",
    },
  ];
  return (
    <>
      <div className="tokyo_tm_resumebox">
        <div className="container">
          <div className="in">
            <div className="left">
              <div className="tokyo_section_title">
                <h3>Education</h3>
              </div>
              <div className="tokyo_tm_resume_list">
                <ul>
                  {education.map(({ time, title, subtitle }: any, idx: any) => (
                    <li key={idx}>
                      <div className="list_inner">
                        <div className="time">
                          <span>{time}</span>
                        </div>
                        <div className="place">
                          <h3>{title}</h3>
                          <span>{subtitle}</span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="right">
              <div className="tokyo_section_title">
                <h3>Experience</h3>
              </div>
              <div className="tokyo_tm_resume_list">
                <ul>
                  {experience.map(
                    ({ time, title, subtitle }: any, idx: any) => (
                      <li key={idx}>
                        <div className="list_inner">
                          <div className="time">
                            <span>{time}</span>
                          </div>
                          <div className="place">
                            <h3>{title}</h3>
                            <span>{subtitle}</span>
                          </div>
                        </div>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Education;
