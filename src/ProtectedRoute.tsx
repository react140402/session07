import type { ReactElement } from "react";
import { useAppSelector } from "./hooks";
import { selectAuth } from "./pages/auth/auth.slice";

interface Props {
    children: ReactElement;
    role: string;
}

export const ProtectedRoute = ({ children, role }: Props) => {
    const { email } = useAppSelector(selectAuth)
    if (email && email === "test@test.com" && role === "admin") {
        return <>{children}</>
    } else {
        return <>
            <h1>No Access</h1>
        </>
    }
}