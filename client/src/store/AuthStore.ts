import { create } from "zustand";

export const useAuthStore = create((set) => ({
    //get the data from local storage
    authData: () => { 
        localStorage.getItem("authData")
        ? JSON.parse(localStorage.getItem("authData") as string)
        : null
    },
    setAuthData: (authData: {}) => {
        localStorage.setItem("authData", JSON.stringify(authData));
        set({authData});
    }
}))