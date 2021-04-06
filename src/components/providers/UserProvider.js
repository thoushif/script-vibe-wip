import React, { createContext, useEffect, useState } from "react";
import { auth } from "../firebase";
export const UserContext = createContext({ user: null });
export default function UserProvider(props) {
  const [currentUser, setCurrentUser] = useState();
  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      setCurrentUser(userAuth);
    });
  }, []);
  return (
    <UserContext.Provider value={currentUser}>
      {props.children}
    </UserContext.Provider>
  );
}
