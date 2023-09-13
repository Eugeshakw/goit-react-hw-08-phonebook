// import { useState } from "react";
import { useDispatch } from "react-redux";
import {register} from './redux/auth/auth-operations';
import style from './registerFrom.module.scss'
export const RegisterForm = () => {
    const dispatch = useDispatch()
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const name = form.elements.name.value;
        const email = form.elements.email.value;
        const password = form.elements.password.value;

        dispatch(register({name, email, password}))
       
    }

  return (
    <div>
      <form onSubmit={handleSubmit} className={style.form}>

      <label className={style.label}>
          name
          <input type="text" name="name" />
        </label>

        <label className={style.label}>
          email
          <input type="text" name="email" />
        </label>

        <label className={style.label}>
          password
          <input type="password" name="password"  />
        </label>

        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};
