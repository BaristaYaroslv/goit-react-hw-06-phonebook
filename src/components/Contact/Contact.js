import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { WrapContact, EditButton, DeleteButton } from './Contact.styled';
import { deleteContact,  } from 'reduxe/sliceContacts';
import EditContact from 'components/EditContact/EditContact';

const Contact = ({ contact }) => {
  const dispatcher = useDispatch();
  const [editContact, setEditContact] = useState(false);


  const handlerDelete = () => {
    dispatcher(deleteContact(contact.id));
  };

  const handlerEdit = () => {
    setEditContact(!editContact);
    // dispatcher(editContact(contact.id));
  };

  return (
    <WrapContact>
      {contact.name}: {contact.number}
      
      <DeleteButton type="button" onClick={handlerDelete}>
        Delete
      </DeleteButton>
      {editContact && (
      <EditContact key={contact.id} contact={contact} />)}
      <EditButton type="button" onClick={handlerEdit}>
        {editContact ? 'Cancel' : 'Edit'}
      </EditButton>
    </WrapContact>
  );
};

Contact.propType = {
  contact: PropTypes.exact({
    id: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    edit: PropTypes.bool,
  }).isRequired,
};

export default Contact;
