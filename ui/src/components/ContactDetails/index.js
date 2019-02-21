import React from 'react';
import getContact, { contactTypes, contactNames } from '../../utils/contacts';
import './styles.css';

const cName = 'ContactDetails';

const ContactDetails = ({
  style = {},
}) => (
  <div className={cName} style={style}>
    <div className={`${cName}__inner`} style={style}>
      <div className={`${cName}__detail`} style={{marginBottom:0}}>
        <div className={`${cName}__detail--text`}>
          Email: {getContact(contactTypes.EMAIL, contactNames.INFO)}
        </div>
        <div className={`${cName}__detail--text`}>
          Phone: {getContact(contactTypes.MOBILE, contactNames.JAMES)}
        </div>
        <div className={`${cName}__detail--text`}>
          <div>WHARNCLIFFE TRAILWORKS</div>
          <div>61 BLACKSMITH LANE    </div>
          <div>GRENOSIDE             </div>
          <div>SHEFFIELD             </div>
          <div>S35 8NB               </div>
        </div>
        <div
          className={`${cName}__detail--text`}
          style={{marginTop: 20}}
        >
          We look forward to hearing from you.
        </div>
      </div>
    </div>
  </div>
);

export default ContactDetails;
