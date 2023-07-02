import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';


export const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <li>
      <div>
        <p>{name}: </p>
        <p>{number}</p>
      </div>
      <button
        type="button"
        aria-label="delete"
        onClick={() => {
          dispatch(deleteContact(id));
        }}
      >
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  phone: PropTypes.string,
};
