
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import style from './styleAuth.module.scss'
export const AuthNav = () => {
   const islogin = useSelector(state => state.user.isLogIn)
   console.log(islogin);
 return (
    <div className={style.container}>
       <ul className={style.linkRegister}>
        <li className={style.item}>
        <Link to="/login">log In</Link>
        </li>
        <li className={style.item}>
         {!islogin && <Link to='/register' className={style.linkRegister}>register</Link>}
          

            
         
        </li>
        <li className={style.item}>
         {islogin && <Link to='/dashboard'>Contacts</Link>}
        </li>
        
       </ul>
    </div>
 )
}