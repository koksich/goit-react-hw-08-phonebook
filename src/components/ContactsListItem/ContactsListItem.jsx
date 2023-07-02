import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { Btn, ListItem, P } from './ContactsListItem.styled';


export const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <ListItem>
      <div>
        <P>{name}: </P>
        <P>{number}</P>
      </div>
      <Btn
        type="button"
        aria-label="delete"
        onClick={() => {
          dispatch(deleteContact(id));
        }}
      >
        Delete
      </Btn>
    </ListItem>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  phone: PropTypes.string,
};
