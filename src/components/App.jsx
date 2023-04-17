import AddContact from './AddContact/AddContact';
import ListContacts from './ListContacts/ListContacts';
import Filter from './Filter/Filter';

import { TitlePhonebook, TitleContacts, Container } from './App.style';
import { useSelector } from 'react-redux';
import { getContacts } from 'reduxe/selectors';

const App = () => {
  const contacts = useSelector(getContacts);

  return (
    <Container className="App">
      <TitlePhonebook>Phonebook</TitlePhonebook>
      <AddContact />

      {contacts.length > 0 && (
        <>
          <Filter />
          <TitleContacts>Contacts</TitleContacts>
          <ListContacts />
        </>
      )}
    </Container>
  );
};

export default App;
