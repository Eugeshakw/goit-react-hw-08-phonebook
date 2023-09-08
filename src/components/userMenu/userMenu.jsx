import { useDispatch, useSelector } from "react-redux"
import { logout } from '../redux/auth/authSlice'

export const Usermenu = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user.login);
    return (
        <div>
              {user}
            <button type="button" onClick={() => { dispatch(logout())}}>Log Out</button>
        </div>
    )
}