// import { createContext, useContext, useState } from "react";

// const AppContext = createContext();
// export const useAppContext = () => useContext(AppContext);

// export let usersActions = null;
// const AppContextProvider = ({ children }) => {
//   const [scrolValue, setScrolValue] = useState();
//   const [users, setUsers] = useState([]);

//   usersActions = {
//     addUser: (newUser) => {
//       setUsers([...users, newUser]);
//     },
//     removeUser: (userForRemove) => {
//       setUsers(users.filter((user) => user.id !== userForRemove.id));
//     },
//   };
//   return (
//     <AppContext.Provider value={{ scrolValue, setScrolValue, users}}>
//       {children}
//     </AppContext.Provider>
//   );
// };

// export default AppContextProvider;
