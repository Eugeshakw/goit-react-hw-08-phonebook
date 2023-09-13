import React from 'react';

import style from './contactform.module.scss';

import { useDispatch, useSelector } from 'react-redux';
import {fetchContacts} from '../redux/createSlice'
import { nanoid } from 'nanoid';
import { fetchContactsAdd } from '../redux/createSlice';
import { useEffect } from 'react';

export const Contactform = () => {
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])

  const contacts = useSelector(state => state.contacts.contacts.items);
  console.log(contacts);

 


  const onSubmitFrom = e => {
    e.preventDefault();
    const number = e.target.number.value;
    const name = e.target.name.value;
    if (number === '') {
      alert('Please enter a number');
      return;
    } else if (
      contacts.some(
        contact =>
          contact.number.toLowerCase() === number.toLowerCase() ||
          contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} or entered number is already in contacts.`);
      return;
    } else if (!/^\d+$/.test(number)) {
      alert('Please enter a valid number.');
      return;
    }
    dispatch(fetchContactsAdd({ name, number, id: nanoid() }));
    // e.target.reset();
  };
  
  return (
    <>
     <h1 style={{ fontSize: '24px', color: 'blue', textAlign: 'center' }}>
          Phonebook
      </h1>
        <h2>Contacts</h2>

      <form
        className={style.form}
        onSubmit={onSubmitFrom}
        autoComplete="off"
      >
        <label className={style.labName} htmlFor="name">
          Name
        </label>
        <input
          type="text"
          name="name"
          className={style.input}
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          id="name"
        />

        <label className={style.labNumber} htmlFor="number">
          Number
        </label>
        <input
          type="tel"
          name="number"
          placeholder="Number"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          className={style.input}
          id="number"
        />

        <button type="submit" className={style.button}>
          add contact
        </button>
      </form>
    </>
  );
};
// export default Contactform;
