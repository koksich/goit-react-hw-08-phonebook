import { ContactsFilter } from 'components/ContactsFilter/ContactsFilter';
import { ContactForm } from 'components/ContactsForm/ContactsForm';
import { ContactList } from 'components/ContactsList/ContactsList';
import { Helmet } from 'react-helmet';

const ContactsPage = () => {
  return (
    <>
      <Helmet>
        <title>Contacts</title>
      </Helmet>
      <ContactForm />
      <ContactsFilter />
      <ContactList/>
    </>
  );
};

export default ContactsPage;