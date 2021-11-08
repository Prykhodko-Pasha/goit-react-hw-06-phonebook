import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import s from '../Contacts/Contacts.module.css';
import * as actions from '../../redux/actions';

function ContactsSearch({ value, onChange }) {
  return (
    <label className={s.wrapper}>
      <input
        placeholder="Find contacts by name"
        type="text"
        value={value}
        onChange={onChange}
      />
    </label>
  );
}

ContactsSearch.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: event =>
    dispatch(actions.searchContact(event.target.value.toLowerCase())),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsSearch);
