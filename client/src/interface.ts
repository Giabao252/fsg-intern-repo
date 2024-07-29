import { ReactNode } from "react"

export interface UserDetails {
    sub: string,
    name: string,
    email: string,
    profile_pic: string
}

export interface AuthPropType {
    children: ReactNode
}

export interface AuthContextType {
    authData: any;
    setAuthData: (data: any | null | undefined) => void;
    logout: () => void;
    currentUser: any
}

export interface NavBarProps {
    home_endpoint: string;
    account: string;
}