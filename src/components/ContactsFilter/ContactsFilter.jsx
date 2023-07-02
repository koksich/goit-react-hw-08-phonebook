import { useDispatch } from "react-redux";
import { setFilter } from "redux/contacts/filterSlice";

export const ContactsFilter = () => {
  const dispatch = useDispatch();
  const onChangeFilter = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <div>
      <label htmlFor="filter"> Find contacts by name</label>
      <input type="text" name="filter" id="filter" onChange={onChangeFilter} />
    </div>
  );
};
