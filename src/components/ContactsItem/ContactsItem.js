import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import s from '../Contacts/Contacts.module.css';
import * as actions from '../../redux/actions';

export default function ContactsItem({ id, name, number }) {
  const dispatch = useDispatch();

  return (
    <>
      <p>
        {name}: {number}
      </p>
      <button
        className={s.del__btn}
        type="button"
        onClick={() => dispatch(actions.delContact(id))}
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
  // onDelContact: PropTypes.func.isRequired,
};

//======= vinilla redux =======
// const mapDispatchToProps = dispatch => ({
//   onDelContact: id => dispatch(actions.delContact(id)),
// });

// export default connect(null, mapDispatchToProps)(ContactsItem);
