
import { useDispatch } from 'react-redux';
import {login} from '../redux/auth/authSlice'
import { useNavigate } from 'react-router-dom';
export const LoginForm = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget.login.value;
        dispatch(login(form))
        // console.log(e.currentTarget.login.value);
        e.target.reset()
        navigate('/dashboard', {replace: true})
    }
  return (
    <form action="" onSubmit={handleSubmit}>
      <input type="text" name="login" />

      <button type="submit">Log In</button>
    </form>
  );
};
