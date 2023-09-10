
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

export const AuthNav = () => {
   const islogin = useSelector(state => state.user.isLogIn)
 return (
    <div>
       <ul>
        <li>
        <Link to="/login">log In</Link>
        </li>
        <li>
          <Link to='/register'>register</Link>
            {islogin && <Link to='/dashboard'>Contacts</Link>}
         
        </li>
        
       </ul>
    </div>
 )
}