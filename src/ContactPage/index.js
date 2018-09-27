import React, { Component } from 'react';

class ContactPage extends Component {
  render() {
    return (
        <div className="contact-content-wrapper">
          <h1 className="contact-header">CONTACT</h1>
          <hr className="splitter"/>
          <h2 className="contact-info">DamianxAlexander@gmail.com</h2>
          <h3 className="contact-info">732 - 421 - 5544</h3>
          <a href="https://www.linkedin.com/in/damiansalgado/">
            <img className="linkedin-img" alt="linkedin" src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" />
          </a>
        </div>
    )
  }
}

export default ContactPage;
