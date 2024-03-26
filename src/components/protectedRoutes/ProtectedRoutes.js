import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/auth/auth_context';

function ProtectedRoutes() {
  const { cookies } = useAuth();

  return cookies.token ? <Outlet /> : <h1>You are not Authorized to view this page. <br></br>Please <Link style={{textDecorationLine: "underline" }} to="/auth">Login or Signup.</Link></h1>
}

export default ProtectedRoutes;
