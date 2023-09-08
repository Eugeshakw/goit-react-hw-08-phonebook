import { useLogoutRedirect } from 'hooks/useLogoutRedirect';
import { Form } from '../components/AllForm/AllForm';
export const Dashboard = () => {
  useLogoutRedirect();

  return (
    <>
      <Form />
    </>
  );
};
