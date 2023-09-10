import { useDispatch, useSelector } from "react-redux"
import { logout } from '../redux/auth/auth-operations'

export const Usermenu = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user.user.name);
    console.log(user);
    return (
        <div>
              {user}
            <button type="button" onClick={() => {dispatch(logout())}}>Log Out</button>
        </div>
    )
}