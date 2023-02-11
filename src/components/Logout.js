import { Navigate } from "react-router-dom";
import { useAuth } from "./useAuth";

export default function Logout() {
  const { logout } = useAuth();
  logout();
  return <Navigate to="/login" />;
}