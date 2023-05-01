import PropTypes from 'prop-types';
import { Wrapper, Label, Input } from './Filter.styled';

export const Filter = ({ value, onFilterChange }) => {
  return (
    <Wrapper>
      <Label htmlFor="filter">Find contacts by name</Label>
      <Input name="filter" type="text" id="filter" value={value} onChange={onFilterChange} />
    </Wrapper>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};
