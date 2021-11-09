import { useDispatch, useSelector } from 'react-redux';
import s from '../Contacts/Contacts.module.css';
import * as actions from '../../redux/actions';

export default function ContactsSearch() {
  const value = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  return (
    <label className={s.wrapper}>
      <input
        placeholder="Find contacts by name"
        type="text"
        value={value}
        onChange={event =>
          dispatch(actions.searchContact(event.target.value.toLowerCase()))
        }
      />
    </label>
  );
}

//======= vinilla redux =======
// const mapStateToProps = state => ({
//   value: state.contacts.filter,
// });

// const mapDispatchToProps = dispatch => ({
//   onChange: event =>
//     dispatch(actions.searchContact(event.target.value.toLowerCase())),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ContactsSearch);
