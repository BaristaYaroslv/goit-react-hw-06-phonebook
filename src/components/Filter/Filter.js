import { useDispatch } from 'react-redux';
import { changeFilter } from 'reduxe/sliceFilter';
import { TitleFilter, InputFilter } from './Filter.styled';

const Filter = () => {
  const dispatcher = useDispatch();

  const handlerChangeFilter = event => {
    dispatcher(changeFilter(event.currentTarget.value));
  };

  return (
    <>
      <TitleFilter>Find contact by name</TitleFilter>
      <InputFilter type="text" name="filter" onChange={handlerChangeFilter} />
    </>
  );
};

export default Filter;
