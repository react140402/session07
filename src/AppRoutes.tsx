import { ErrorPage } from "./ErrorPage";
import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from './AppLayout'
// // import { TaskList } from "./components/Task/TaskList";
// import { TodoList } from "./components/Todo/TodoList";
// import { PostList } from "./components/Post/PostList";
import { AuthLayout } from "./AuthLayout";

const TaskList = lazy(() => import("./pages/Task/TaskList"))
const TodoList = lazy(() => import("./pages/Todo/TodoList"))
const PostList = lazy(() => import("./pages/Post/PostList"))
const Counter = lazy(() => import("./components/Counter"))



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
            },
            {
                path: 'counter',
                element: <Counter />
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