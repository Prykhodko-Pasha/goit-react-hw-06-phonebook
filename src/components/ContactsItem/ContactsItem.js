import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import s from '../Contacts/Contacts.module.css';
import { delContact } from '../../redux/actions';

function ContactsItem({ id, name, number, onDelContact }) {
  return (
    <>
      <p>
        {name}: {number}
      </p>
      <button
        className={s.del__btn}
        type="button"
        onClick={() => onDelContact(id)}
      >
        Delete
      </button>
    </>
  );
}

ContactsItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  contacts: state.contacts,
});
const mapDispatchToProps = dispatch => ({
  onDelContact: id => dispatch(delContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsItem);
