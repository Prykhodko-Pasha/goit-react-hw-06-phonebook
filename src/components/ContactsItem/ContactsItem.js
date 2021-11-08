import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import s from '../Contacts/Contacts.module.css';
import * as actions from '../../redux/actions';

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
  onDelContact: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  onDelContact: id => dispatch(actions.delContact(id)),
});

export default connect(null, mapDispatchToProps)(ContactsItem);
