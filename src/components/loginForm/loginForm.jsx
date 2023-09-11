import { useDispatch } from 'react-redux';
import style from './styleLoginForm.module.scss'
import { login } from '../redux/auth/auth-operations';
export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    dispatch(login({ email, password }));
  };

  return (
    <>
      <div className={style.container}>
        <form onSubmit={handleSubmit} className={style.form}>
          <label >
            Email
            <input type="text" name="email" className={style.input}/>
          </label>
          <label>
            Password
            <input type="password" name="password" className={style.input}/>
          </label>

          <button type="submit" className={style.buttonlogin}>Log In</button>
        </form>
      </div>
    </>
  );
};
