import { useContext } from "react";
import { AuthContext } from "./authContext";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedHome() {
  const { auth } = useContext(AuthContext);
  console.log(auth, "auth.....");
  if (auth) {
    return <Outlet />;
  }

  return <Navigate to="login" />;
  //   return (
  //     <div>ProtectedLogin</div>
  //   )
}

export default ProtectedHome;
