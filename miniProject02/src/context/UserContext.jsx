import React from "react";
import { useContext, useState } from "react";

// each context component creates a React component
const UserContext = React.createContext();

// export a provider that exposes the context for a top level component
export const UserProvider = (props) => {
    const [currentUser, setCurrentUser] = useState({});

    const handleUpdateUser = (user) => {
        setCurrentUser(user);
    }

    return (
        <UserContext.Provider value={{ currentUser, handleUpdateUser }}>
            {props.children}
        </UserContext.Provider>
    )
}

// for components needing access to the context, we provide a hook
export const useUserContext = () => {
    return useContext(UserContext);
}