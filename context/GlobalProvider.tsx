import { getCurrentUser } from "@/lib/appwrite";
import { createContext, useContext, useState, useEffect } from "react";
import { Models } from "react-native-appwrite";

const GlobalContext = createContext({
  isLoggedIn: false,
  setIsLoggedIn: (value: boolean) => {},
  User: {} as Models.Document | null,
  setUser: (value: Models.Document | null) => {},
  isLoading: true,
});
export const useGlobalContext = () => useContext(GlobalContext);

export const GlobalProvider = ({ children }: React.PropsWithChildren) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [User, setUser] = useState<Models.Document | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getCurrentUser()
      .then((res) => {
        if (res) {
          setIsLoggedIn(true);
          setUser(res);
        } else {
          setIsLoggedIn(false);
          setUser(null);
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        User,
        setUser,
        isLoading,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
