import React, { Component } from 'react';
import Header from '../../Header';
import ContactDetails from '../../ContactDetails';
import './styles.css';
// import Row from '../../Row';
// import ContactForm from '../../ContactForm';

export const CONTACT = 'CONTACT';

const cName = 'Contact';

class Contact extends Component {
  render() {
    return (
      <div className={cName}>
        <Header className={`${cName}__header`}>Contact</Header>

        <ContactDetails />
        {/* <Row className={`${cName}__row`}>

          <ContactForm style={boxStyle} />
        </Row> */}
      </div>
    );
  }
}

export default Contact;
