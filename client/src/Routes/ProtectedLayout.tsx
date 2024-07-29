import { Navigate, useOutlet } from "react-router-dom";
import { NavBar } from "../components/export";
import useAuth from "../hooks/useAuth";

const ProtectedLayout: React.FC = () => {
  const { currentUser } = useAuth();
  const outlet = useOutlet();

  if (!currentUser) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <NavBar
        home_endpoint="/main"
        account={currentUser}
      />
      {outlet}
    </div>
  );
};

export default ProtectedLayout;