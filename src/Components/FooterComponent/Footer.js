import React, { Component } from 'react';
import { Link } from "react-router-dom";

const social = [
  {
    name: "Email",
    addr: "demond611@gmail.com"
  },
  {
    name: "LinkedIn",
    addr: "http://www.linkedin.com/pub/robert-walker/90/9b4/2a8"
  },
  {
    name: "GitHub",
    addr: "http://github.com/demond611"
  }
];

const SocialLinks = props => {
  const links = props.socialLinks.map((link, index) => {
    return (
      <li key={index}>
        <a
          href={index === 0?"mailto:"+link.addr:link.addr}
          target='_blank' rel='noopener noreferrer'>
          {link.name}
        </a>
      </li>
    )
  });
  return <ul>{links}</ul>
};

class Footer extends Component {
  render (){
    return (
      <footer>
        <section className="ui container">
          <aside>
            <Link to="/">&copy; 2019 Robert Walker</Link>
          </aside>
          <aside>
            <SocialLinks socialLinks={social} />
          </aside>
        </section>
      </footer>
    );
  }
}

export default Footer;