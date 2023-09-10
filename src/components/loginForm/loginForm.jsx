
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {login} from '../redux/auth/auth-operations'
export const LoginForm = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        const email = form.elements.email.value;
        const password = form.elements.password.value;
        dispatch(login({email, password}))
        navigate('/dashboard', {replace: true})
        e.target.reset()
        
    }
  return (
    <form action="" onSubmit={handleSubmit}>
      <label >
        Email
        <input type="text" name="email" />
      </label>
      <label>
        Password

        <input type="password" name="password" />
      </label>
      

      <button type="submit">Log In</button>
    </form>
  );
};
