import axios from "axios";
import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import ArrowSVG from "../../../assets/img/svg/rightarrow.svg";

function MySkills() {
  var programming: any = [
    {
      title: "JavaScript (ES6+)",
      percent: 80,
    },
    {
      title: "TypeScript",
      percent: 75,
    },
    {
      title: "React Js",
      percent: 85,
    },
    {
      title: "React Native",
      percent: 75,
    },
    {
      title: "Node Js",
      percent: 50,
    },
  ];
  var language: any = [
    {
      title: "Uzbek",
      percent: 80,
    },
    {
      title: "English",
      percent: 40,
    },
    {
      title: "Russian",
      percent: 60,
    },
    {
      title: "Korean",
      percent: 40,
    },
  ];
  var knowledge: any = [
    {
      title: "Html5, Css3, Sass, Less",
    },
    {
      title: "Bootstrap, Tailwand Css, Animation etc.",
    },
    {
      title: "JavaScript, TypeScript, jQuery etc.",
    },
    {
      title: "React Js, React Native (Redux-toolkit, React-hooks etc.)",
    },
    {
      title: "Node Js, Express Js, MongoDB etc.",
    },
    {
      title: "Website (Landing Page, Web Design, Optimization etc.)",
    },
    {
      title: "Responsive Website (xl, lg, md, sm)",
    },
    {
      title: "Firebase, render, imagekite, etc.",
    },
    {
      title: "Git, Github, etc.",
    },
    {
      title: " Figma etc.",
    },
  ];
  var interests: any = [
    {
      title: "Custom Website and APK",
    },
    {
      title: "Playing Chess",
    },
    {
      title: "Playing PUBG Mobile and CS:GO",
    },
    {
      title: "To Take a Walk",
    },
    {
      title: "Listening to Music and Watching Movies",
    },
    {
      title: "Playing Table Tennis",
    },
    {
      title: "Assemble Rubik's Cube",
    },
  ];

  return (
    <>
      <div className="tokyo_tm_progressbox">
        <div className="container">
          <div className="in">
            <div className="left">
              <div className="tokyo_section_title">
                <h3>Programming Skills</h3>
              </div>
              <div className="tokyo_progress">
                {programming.map((skil: any, i: any) => (
                  <div className="progress_inner" key={i}>
                    <span>
                      <span className="label">{skil.title}</span>
                      <span className="number">
                        {skil.percent}
                        {" % "}
                      </span>
                    </span>
                    <div className="background">
                      <div className="bar">
                        <div
                          className="bar_in"
                          style={{ width: `${skil.percent}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="right">
              <div className="tokyo_section_title">
                <h3>Language Skills</h3>
              </div>
              <div className="tokyo_progress">
                {language.map((skil: any, i: any) => (
                  <div className="progress_inner" key={i}>
                    <span>
                      <span className="label">{skil.title}</span>
                      <span className="number">
                        {skil.percent}
                        {" % "}
                      </span>
                    </span>
                    <div className="background">
                      <div className="bar">
                        <div
                          className="bar_in"
                          style={{ width: `${skil.percent}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tokyo_tm_skillbox">
        <div className="container">
          <div className="in">
            <div className="left">
              <div className="tokyo_section_title">
                <h3>Knowledge</h3>
              </div>
              <div className="tokyo_tm_skill_list">
                <ul>
                  {knowledge.map((skil: any, i: any) => (
                    <li key={i}>
                      <span>
                        <img
                          className="svg"
                          src={ArrowSVG}
                          alt="Error....!!!"
                        />
                        {skil.title}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="right">
              <div className="tokyo_section_title">
                <h3>Interests</h3>
              </div>
              <div className="tokyo_tm_skill_list">
                <ul>
                  {interests.map((skil: any, i: any) => (
                    <li key={i}>
                      <span>
                        <img
                          className="svg"
                          src={ArrowSVG}
                          alt="Error....!!!"
                        />
                        {skil.title}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MySkills;
