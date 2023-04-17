import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'reduxe/selectors';

import { ContactList } from './ListContacts.styled';
import Contact from 'components/Contact/Contact';
import EditContact from 'components/EditContact/EditContact';

const ListContacts = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const visibleContacts = contacts.filter(element =>
    element.name.toUpperCase().includes(filter.toUpperCase())
  );

  return (
    <ContactList>
      {visibleContacts.map(contact => {
        if (!contact.edit) {
          return <Contact key={contact.id} contact={contact} />;
        } else {
          return <EditContact key={contact.id} contact={contact} />;
        }
      })}
    </ContactList>
  );
};

export default ListContacts;
