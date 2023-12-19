import { useContext } from "react";
import { AuthContext } from "./authContext";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedLogin() {
  const { auth } = useContext(AuthContext);

  if (!auth) {
    return <Outlet />;
  }

  return <Navigate to="/" />;

  //   return (
  //     <div>ProtectedLogin</div>
  //   )
}

export default ProtectedLogin;
