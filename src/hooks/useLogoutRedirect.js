import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";


export const useLogoutRedirect = () => {
    const navigate = useNavigate()
    const isLogIn = useSelector(state => state.user.isLogIn)
    useEffect(() => {
        if (!isLogIn) {
            navigate('/login', {replace: true})
        }
    }, [isLogIn, navigate]);
}