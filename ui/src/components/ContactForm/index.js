import React from 'react';
import _ from 'lodash/fp';
import  getContact, { contactTypes, contactNames } from '../../utils/contacts';
import './styles.css';
import Header from '../Header';
import classnames from 'classnames';

const cName = 'ContactForm';

const Label = ({ name, children }) => (
  <label className={`${cName}__label`} name={name}>
    {children}
  </label>
);

const Input = ({ type, name, className }) => (
  <input
    className={classnames(`${cName}__input`, { [className]: !_.isEmpty(className) })}
    type={type}
    name={name}
  />
);

const InputSection = ({ type, name, label = '' }) => (
  <React.Fragment>
    <Label name={name}>{label}</Label>
    <br/>
    <Input name={name} type={type} />
    <br/>
  </React.Fragment>
);

const TextArea = ({ name, label, rows = 6 }) => (
  <React.Fragment>
    <Label name={name}>{label}</Label>
    <br/>
    <textarea
      className={classnames(`${cName}__input`, `${cName}__input--textarea`)}
      name={name}
      rows={rows}
      form={cName}
    />
  </React.Fragment>
);

const ContactForm = ({
  title = 'Contact Us Directly',
  hideTitle = false,
  style = {},
}) => (
  <div className={cName} style={style}>
    { !hideTitle && <Header className={`${cName}__header`}>{title}</Header> }
    <form
      className={`${cName}__form`}
      // action={`mailto:${getContact(contactTypes.EMAIL, contactNames.INFO)}`}
      action={`mailto:fred@wharncliffetrailworks.com`}
      method='post'
      encType='text/plain'
      id={cName}
    >
      <InputSection type='text'  name='name'    label='Name' />
      <InputSection type='email' name='mail'    label='Email' />
      <InputSection type='text'  name='subject' label='Subject' />
      <TextArea name='message' label='Message' />

      <input className={`${cName}__submit`} type='submit' value='Send'/>
      <input className={`${cName}__reset`}  type='reset' value='Reset'/>
    </form>

  </div>
);

export default ContactForm;
