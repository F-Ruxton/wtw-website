import React, { Component } from 'react';
import Header from '../../Header';
import ContactDetails from '../../ContactDetails';
import './styles.css';

export const CONTACT = 'CONTACT';

const cName = 'Contact';

class Contact extends Component {
  render() {
    return (
      <div className={cName}>
        <Header className={`${cName}__header`}>Contact</Header>

        <ContactDetails />
      </div>
    );
  }
}

export default Contact;
