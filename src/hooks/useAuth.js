import { useSelector } from "react-redux";
// import {selectorlogin} from '../components/redux/auth/authSlice'

export const useAuth = () => {
    const isLogIn = useSelector(state => state.user.isLogIn);
    const user = useSelector(state => state.user.user)
    const isRefreshing = useSelector(state => state.user.isRefreshing)
    // console.log(isLogIn);
    return {
        isLogIn,
        user,
        isRefreshing
    };
};