import { Navigate, useOutlet } from "react-router-dom";
import { NavBar } from "../components/export";
import useAuth from "../hooks/useAuth";

const HomeLayout: React.FC = () => {
    const { currentUser } = useAuth();
    const outlet = useOutlet();

    if (currentUser) {
        return <Navigate to="/main" replace />;
    }

    return (
        <div>
            <NavBar home_endpoint="/" account="Login" />
            {outlet}
        </div>
    );
};

export default HomeLayout;