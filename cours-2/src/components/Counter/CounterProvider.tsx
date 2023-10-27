import { ReactNode } from "react";
import { createContext } from "react";

type CounterContextType = {
    children: ReactNode
}

const CounterContext = createContext<CounterContextType | null>({ children: null })

const CounterProvider = ({ children }: CounterContextType) => {
    return (
        <CounterContext.Provider value={{ children }}>
            {children}
        </CounterContext.Provider>
    )
}

export { CounterProvider, CounterContext }
