import { createContext, useState, useEffect, useMemo, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { AuthPropType, AuthContextType } from "../interface";

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<AuthPropType> = ({ children }) => {
    const [currentUser, setCurrentUser] = useState<string | null>(null);
    const [authData, setAuthDataState] = useState<any>(() => {
        // Initial state based on local storage
        const data = localStorage.getItem('authData');
        try {
            return data? JSON.parse(data) : null;
        } catch {
            return null;
        }
    });

    const navigate = useNavigate();

    // Update local storage whenever authData changes
    useEffect(() => {
        if (authData) {
            localStorage.setItem('authData', JSON.stringify(authData));
            setCurrentUser(authData.data.username);
        } else {
            localStorage.removeItem('authData');
            setCurrentUser(null);
        }
    }, [authData]);

    // Function to set authentication data
    const setAuthData = (data: any | null | undefined) => {
        setAuthDataState(data);
        setCurrentUser(data.data.username);
    };

    // Function to log out
    const logout = () => {
        setAuthDataState(null);
        setCurrentUser(null);
        navigate('/'); // Navigate to guest login page
    };

    // Memoize the context value to avoid unnecessary renders
    const values = useMemo(
        () => ({
            authData,
            setAuthData,
            logout,
            currentUser
        }),
        [authData, currentUser]
    );


    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );
}