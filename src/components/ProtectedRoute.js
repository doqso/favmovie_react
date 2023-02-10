import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ user, children }) {
  console.log(user);
  if (!user) return <Navigate to="/login" />;
  return children;
}