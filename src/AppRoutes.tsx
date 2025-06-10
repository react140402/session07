import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from './AppLayout'
import { TaskList } from "./components/Task/TaskList";
import { TodoList } from "./components/Todo/TodoList";
import { PostList } from "./components/Post/PostList";
import { AuthLayout } from "./AuthLayout";
import { ErrorPage } from "./ErrorPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '',
                element: <h1>Home</h1>
            },
            {
                path: 'task',
                element: <TaskList />
            },
            {
                path: 'todo',
                element: <TodoList />
            },
            {
                path: 'post',
                element: <PostList />
            }

        ]
    },
    {
        path: "/auth",
        element: <AuthLayout />,
        children: [
            {
                path: 'login',
                element: <h1>Login</h1>
            }
        ]
    }
])