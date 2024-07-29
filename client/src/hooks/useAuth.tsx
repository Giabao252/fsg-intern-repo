import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";
import { AuthContextType } from "../interface";

const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);

    if (!context) {
        return {
            authData: null,
            setAuthData: () => {},
            logout: () => {},
            currentUser: null
        };
    }

    return context;
};

export default useAuth;