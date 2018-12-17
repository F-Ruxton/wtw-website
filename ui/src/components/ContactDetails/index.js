import React from 'react';
import getContact, { contactTypes, contactNames } from '../../utils/contacts';
import './styles.css';

const cName = 'ContactDetails';

const ContactDetails = ({
  style = {},
}) => (
  <div className={cName} style={style}>
    <div className={`${cName}__inner`} style={style}>

      <div className={`${cName}__detail`}>
        <div>
          For any enquiries, please contact:
        </div>
        <div className={`${cName}__detail--text`}>
          {getContact(contactTypes.EMAIL, contactNames.INFO)}
        </div>
      </div>

      <div className={`${cName}__detail`}>
        <div>Or call:</div>
        <div className={`${cName}__detail--text`}>
          James - {getContact(contactTypes.MOBILE, contactNames.JAMES)}
        </div>
        <div className={`${cName}__detail--text`}>
          Fred - {getContact(contactTypes.MOBILE, contactNames.FRED)}
        </div>
      </div>

      <div className={`${cName}__detail`}>
        We look forward to hearing from you.
      </div>

      <div className={`${cName}__detail`} style={{marginBottom:0}}>
        <div>WHARNCLIFFE TRAILWORKS</div>
        <div>61 BLACKSMITH LANE    </div>
        <div>GRENOSIDE             </div>
        <div>SHEFFIELD             </div>
        <div>S35 8NB               </div>
      </div>

    </div>
  </div>
);

export default ContactDetails;
