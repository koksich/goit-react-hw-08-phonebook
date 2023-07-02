import { ContactsFilter } from 'components/ContactsFilter/ContactsFilter';
import { ContactForm } from 'components/ContactsForm/ContactsForm';
import { ContactList } from 'components/ContactsList/ContactsList';
import { Helmet } from 'react-helmet';
import { Wrapper } from './ContactsPage.styled';

const ContactsPage = () => {
  return (
    <Wrapper>
      <Helmet>
        <title>Contacts</title>
      </Helmet>
      <ContactForm />
      <ContactsFilter />
      <ContactList/>
    </Wrapper>
  );
};

export default ContactsPage;