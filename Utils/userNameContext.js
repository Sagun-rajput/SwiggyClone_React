import { createContext } from "react";

const userNameContext = createContext(
    {userName: "Default User"}
);

export default userNameContext;