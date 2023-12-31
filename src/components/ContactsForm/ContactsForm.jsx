import { useDispatch, useSelector } from "react-redux";
import { addContact } from "redux/contacts/operations";
import { selectContacts } from "redux/contacts/selectors";
import { Btn, Form, Input, Label } from "./ContactsForm.styled";
import { warningToast } from "components/Toasts/Toasts";

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = event => {
    event.preventDefault();
    const { name, number } = event.currentTarget.elements;

    if (onDuplicateCheck(name.value)) {
      warningToast(`${name.value} is already in contacts`);
      event.currentTarget.reset();
      name.focus();
      return;
    }
    dispatch(addContact({ name: name.value, number: number.value }));
    event.currentTarget.reset();
  };

  const onDuplicateCheck = name => {
    return contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
  };

  return (
      <Form      onSubmit={handleSubmit}>
      <Label htmlFor="name">Name</Label>
      <Input
        type="text"
        name="name"
        pattern="^[A-Za-z\u0080-\uFFFF ']+$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        id="name"
      />

      <Label htmlFor="number">Number</Label>
      <Input
        type="tel"
        name="number"
        pattern="^(\+?[0-9.\(\)\-\s]*)$"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        id="number"
      />

      <Btn type="submit">Add contact</Btn>
    </Form>
  );
};
