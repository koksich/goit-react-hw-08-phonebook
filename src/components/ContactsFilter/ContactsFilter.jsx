import { useDispatch } from "react-redux";
import { setFilter } from "redux/contacts/filterSlice";
import { Input, Label, Wrapper } from "./ContactsFilter.styled";

export const ContactsFilter = () => {
  const dispatch = useDispatch();
  const onChangeFilter = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <Wrapper>
      <Label htmlFor="filter"> Find contacts by name</Label>
      <Input type="text" name="filter" id="filter" autoComplete="off" onChange={onChangeFilter} />
    </Wrapper>
  );
};
