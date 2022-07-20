import React from "react";
import Links from './Links'

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {props.bio ? <p>{ props.bio }</p> : null}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* we pass props.github and props.linkedin to Links.js whose values are based
      the props that were passed into About from App */}
      <Links github={props.links.github} linkedin={ props.links.linkedin }/>
    </div>
  );
}

export default About;
