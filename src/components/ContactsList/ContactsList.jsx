import { ContactListItem } from "components/ContactsListItem/ContactsListItem";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "redux/contacts/operations";
import { selectFilteredContacts } from "redux/contacts/selectors";
import { List } from "./ContactsList.styled";

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);



  return (
    <List>
      {contacts.map(({ id, name, number }) => {
        return <ContactListItem key={id} id={id} name={name} number={number} />;
      })}
    </List>
  );
};
