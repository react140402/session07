import { createContext, useState, type ReactNode } from "react";

interface AppContextType {
    color: string;
    setColor: (color: string) => void
}

export const AppContext = createContext<AppContextType>({
    color: "",
    setColor: () => { }
})

export const AppProvider = ({ children }: { children: ReactNode }) => {
    const [color, setColor] = useState("red")

    return <>
        <AppContext.Provider value={{ color, setColor }}>
            {children}
        </AppContext.Provider>
    </>

}