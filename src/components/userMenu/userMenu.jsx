import { useDispatch, useSelector } from "react-redux"
import { logout } from '../redux/auth/auth-operations'
import style from './userMenustyle.module.scss'
export const Usermenu = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user.user.name);
    console.log(user);
    return (
        <div className={style.usercontainer}>
             <p className={style.user}>{user}</p> 
            <button type="button" onClick={() => {dispatch(logout())}}>Log Out</button>
        </div>
    )
}