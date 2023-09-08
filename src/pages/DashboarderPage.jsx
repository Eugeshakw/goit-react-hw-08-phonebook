import { isLogIn } from 'components/redux/auth/authSlice';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const Dashboard = () => {
const navigate = useNavigate()

useEffect(() => {
    if (isLogIn) {
        navigate('/login', {replace: true})
    }
})
    return (
        <div>Dashboard Page</div>
    )
}